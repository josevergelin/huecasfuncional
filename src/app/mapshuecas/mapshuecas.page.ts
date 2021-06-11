import {Component, OnInit, ViewChild, ElementRef, Input, OnDestroy} from '@angular/core';
import {Geolocation} from "@capacitor/core";
//-------leaflet imports
import * as Leaflet from 'leaflet';
import { antPath } from 'leaflet-ant-path';
import {Router} from "@angular/router";
import {timeout} from "rxjs/operators";


@Component({
  selector: 'app-mapshuecas',
  templateUrl: './mapshuecas.page.html',
  styleUrls: ['./mapshuecas.page.scss'],
})
export class MapshuecasPage implements OnInit, OnDestroy {
  latitud: number;
  longitud: number;

  map: Leaflet.Map;
  propertyList = [];

  items:any[] = [];

  @ViewChild("map")
  public mapElement: ElementRef;

  @Input()
  public appId: any;

  @Input()
  public appCode: any;

  @Input()
  public lat: any;

  @Input()
  public lng: any;

  constructor(private router: Router) { }

  ngOnInit() {
  }
///----------------
  ionViewDidEnter() {
    this.leafletMap();
  }
  async leafletMap() {
   // const obtnerCoordenadas= await Geolocation.getCurrentPosition();
    //this.latitud=obtnerCoordenadas.coords.latitude;
    //this.longitud=obtnerCoordenadas.coords.longitude;
    this.map = new Leaflet.Map('map').setView([-0.17680, -78.48602], 16);
    Leaflet.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.map);
//puntos de localizacion
    Leaflet.marker([-0.17680, -78.48602]).addTo(this.map).bindPopup('El Santo Hornado').openPopup();

    Leaflet.marker([-0.17911, -78.48628]).addTo(this.map).bindPopup('El Cafe de Mamá Tere').openPopup();

    Leaflet.marker([-0.17532, -78.48432]).addTo(this.map).bindPopup('El Cafe de Riobamba').openPopup();

    Leaflet.marker([-0.17570, -78.48731]).addTo(this.map).bindPopup('Los Hot Dog de la Gonzalez').openPopup();

    antPath([[-0.17680, -78.48602]],
        { color: '#ff0000', weight: 5, opacity: 0.6 })
        .addTo(this.map);

    antPath([[-0.17911, -78.48628]],
        { color: '#ff0000', weight: 5, opacity: 0.6 })
        .addTo(this.map);

    antPath([[-0.17532, -78.48432]],
        { color: '#ff0000', weight: 5, opacity: 0.6 })
        .addTo(this.map);

    antPath([[-0.17570, -78.48731]],
        { color: '#ff0000', weight: 5, opacity: 0.6 })
        .addTo(this.map);
  }
  ngOnDestroy() {
    this.map.remove();
  }
  goToHome() {
    this.router.navigate(['/home'])
  }
}
