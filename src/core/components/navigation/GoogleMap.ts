import { Component, DataElement, DivElement, ImageElement } from "../..";
import { Loader } from "@googlemaps/js-api-loader";

export class GoogleMapElement extends Component {
  private locateIcon = new ImageElement({
    src: "/node_modules/typecompose/public/Ic_my_location_48px.svg.png",
    cursor: "pointer",
    width: "40px",
    height: "40px",
    backgroundSize: "200px 40px",
    backgroundPosition: "0px 0px",
    backgroundRepeat: "no-repeat",
    position: "absolute",
    right: "10px",
    bottom: "40px",
  });

  private mapElement: DivElement = new DivElement({
    width: "100%",
    height: "100%",
  });
  public loader: Loader;
  public map!: any;

  constructor(apiKey: string, data?: DataElement) {
    super({ display: "flex", ...data });
    this.loader = new Loader({
      apiKey: apiKey,
      version: "weekly",
      libraries: ["places"],
    });
    this.append(this.mapElement, this.locateIcon);
    this.locateIcon.onclick = () => {
      this.geolocate();
    };
  }

  connectedCallback() {
    this.onInit();
  }

  onInit(): void {
    this.loader.load().then(async () => {
      /// @ts-ignore
      const { Map } = (await google.maps.importLibrary(
        "maps",
        /// @ts-ignore
      )) as google.maps.MapsLibrary;
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            var userLocation = {
              lat: position.coords.latitude,
              lng: position.coords.longitude,
            };
            this.map = new Map(this.mapElement as any, {
              center: userLocation,
              zoom: 15,
              disableDefaultUI: true,
            });
            // // Criar um marcador na localização do usuário
            this.addMarker(
              userLocation.lat,
              userLocation.lng,
              "Você está aqui!",
            );

            // // Centralizar o mapa na localização do usuário
            // this.setCenter(userLocation.lat, userLocation.lng);
          },
          function () {
            // Tratamento de erro ao obter a localização do usuário
            console.error("Erro ao obter a localização do usuário.");
          },
        );
      } else {
        // O navegador não suporta a API de Geolocalização
        console.error("Geolocalização não suportada pelo seu navegador.");
      }
      // this.geolocate();
    });
  }

  public setCenter(lat: number, lng: number): void {
    this.map.setCenter({ lat: lat, lng: lng });
  }

  public setZoom(zoom: number): void {
    this.map.setZoom(zoom);
  }

  public setMapTypeId(mapTypeId: string): void {
    this.map.setMapTypeId(mapTypeId);
  }

  public setHeading(heading: number): void {
    this.map.setHeading(heading);
  }

  public setTilt(tilt: number): void {
    this.map.setTilt(tilt);
  }

  public setMap(map: any): void {
    this.map.setMap(map);
  }

  public setOptions(options: any): void {
    this.map.setOptions(options);
  }

  public getOptions(): any {
    return this.map.getOptions();
  }

  public setOption(key: string, value: any): void {
    this.map.setOption(key, value);
  }

  public setStreetView(panorama: any): void {
    this.map.setStreetView(panorama);
  }

  public setClickableIcons(clickable: boolean): void {
    this.map.setClickableIcons(clickable);
  }

  public addMarker(lat: number, lng: number, title: string): void {
    /// @ts-ignore
    var marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng,
      },
      map: this.map,
      title: title,
    });

    marker.addListener("click", function () {
      alert("Você clicou no marcador!");
    });
  }

  public getCurrentPosition(): any {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          return {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
        },
        function () {
          // Tratamento de erro ao obter a localização do usuário
          console.error("Erro ao obter a localização do usuário.");
        },
      );
    }
  }

  public geolocate(): void {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          var userLocation = {
            lat: position.coords.latitude,
            lng: position.coords.longitude,
          };
          // Centralizar o mapa na localização do usuário
          this.setCenter(userLocation.lat, userLocation.lng);
        },
        function () {
          // Tratamento de erro ao obter a localização do usuário
          console.error("Erro ao obter a localização do usuário.");
        },
      );
    } else {
      // O navegador não suporta a API de Geolocalização
      console.error("Geolocalização não suportada pelo seu navegador.");
    }
  }
}

customElements.define("google-map-element", GoogleMapElement);
