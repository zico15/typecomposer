import { IComponent } from "../..";

export type EventHandler = (...params: any[]) => void;

export class EventComponent extends Event {
  public data: any[] = [];
  public isInit: boolean = false;
  private static events: Map<string, EventComponent> = new Map();
  private eventsListener: Map<
    IComponent,
    EventListenerOrEventListenerObject[]
  > = new Map();
  private static serialize: string = "event-component-";

  constructor(type: string, options?: EventInit) {
    super(EventComponent.serialize + type, options);
  }

  public static emitEvent(type: string, ...data: any[]): boolean {
    const event = EventComponent.createEventBase(type, ...data);
    if (event) {
      if (data.length > 0) event.data = data;
      event.isInit = true;
      return document.dispatchEvent(event);
    }
    return false;
  }

  private static createEventBase(type: string, ...data: any[]): EventComponent {
    if (type === undefined || type === null || type === "") return null;
    let event = EventComponent.events.get(type);
    if (event) return event;
    event = new EventComponent(type);
    EventComponent.events.set(type, event);
    event.data = data;
    event.isInit = data.length > 0;
    return event;
  }

  public static createEvent(type: string, ...data: any[]): boolean {
    return EventComponent.createEventBase(type, ...data) !== null;
  }

  public static addEventListener(
    component: IComponent,
    type: string,
    listener: EventHandler,
    options?: boolean | AddEventListenerOptions | undefined,
  ) {
    const e = EventComponent.createEventBase(type);
    if (e) {
      const eventListener = function (event: EventComponent) {
        listener(...event.data);
      };
      if (e.isInit) listener(...e.data);
      const listeners = e.eventsListener.get(component) || [];
      listeners.push(eventListener);
      e.eventsListener.set(component, listeners);
      document.addEventListener(e.type, eventListener, options);
    }
  }

  public static removeEventListener(component: IComponent, type: string) {
    const e = EventComponent.events.get(type);
    if (e) {
      const listeners = e.eventsListener.get(component);
      if (listeners) {
        for (let event of listeners) {
          document.removeEventListener(e.type, event);
        }
      }
    }
  }

  public static removeEventListeners(component: IComponent) {
    for (let type of EventComponent.events.keys()) {
      EventComponent.removeEventListener(component, type);
    }
  }

  public static deleteEvent(type: string) {
    const e = EventComponent.events.get(type);
    if (e) {
      for (let component of e.eventsListener.keys()) {
        EventComponent.removeEventListeners(component);
      }
      EventComponent.events.delete(type);
    }
  }
}
