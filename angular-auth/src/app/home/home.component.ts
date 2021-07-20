import {Component, OnInit} from '@angular/core';  
import { ApiService } from '../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  message = '';
  services:any

 
  constructor(
    private api:ApiService, 

  ) { }

  ngOnInit(): void {
    this.getServices();
  }

 

  getServices = () => {
    this.api.getAllServices().subscribe(
      data => {
        this.services = data;
        // console.log(data);
      },
      error => {
        console.log("error");
      },
    );
  }


}
