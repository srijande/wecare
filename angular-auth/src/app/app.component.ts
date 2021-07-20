import { Component, OnInit } from '@angular/core';
// import { Loader } from "@googlemaps/js-api-loader";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'angular-auth';

  ngOnInit(): void {
    // let loader = new Loader({
    //   apiKey: 'AIzaSyBgrXKbSsFfXdyJYE4YRCqRnah5FM59tfs'
    // })

    // loader.load().then(()=> {
    //   new google.maps.Map(document.getElementById("map"),{
    //     center: { lat: 51, lng: 6},
    //     zoom: 6
    //   })
    // })

  }
  
}
