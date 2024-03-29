export class RouterEvent {
  /**
   * This event is triggered before leaving the current route. It is useful for
   * carrying out specific checks or actions before allowing the user to leave
   * the current page.
   * @param to
   * @param from
   * @param next
   */
  beforeRouteLeave(to: any, from: any, next: any) {
    next();
  }

  /**
   * This event is triggered before entering the new route. It is useful for carrying
   * out data uploads or other necessary tasks before fully entering the new route
   * @param to
   * @param from
   * @param next
   */
  beforeRouteEnter(to: any, from: any, next: any) {
    next();
  }

  /**
   * This event is triggered when the route is about to be updated, but the current
   * route still remains active. It is useful for carrying out specific actions when
   * the route is changing but the component is still in use.
   * @param to
   * @param from
   * @param next
   * @returns
   */
  beforeRouteUpdate(to: any, from: any, next: any) {
    next();
  }

  /**
   * This event is triggered after the route has been updated. It is useful for
   * carrying out specific actions after the route has been updated.
   * @param to
   * @param from
   */
  afterEach(to: any, from: any) {}
}
