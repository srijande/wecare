import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import {Router, ActivatedRoute, Params} from '@angular/router';
import * as StateData from '../districts.json';  
@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {


  constructor(private activatedRoute: ActivatedRoute , private api:ApiService) { }
  order: any
  reverse: any
  donners: any

  services: any
  categories: any

  service: any
  category: any
  verified: any

  state: any
  district:any
  city:any
  
  states :any = (StateData as any).default

  districts = new Array


  ngOnInit(): void {
    this.getDonners(); 
    this.getServices();
    
  }
  getDonners = () => {
    this.api.getAllDonners(this.service,this.category,this.verified,this.state,this.district,this.city).subscribe(
      data => {
        this.donners = data;
        // console.log(data);
      },
      error => {
        // console.log("error");
      }
    );

  }
 
  getServices = () => {
    this.api.getAllServices().subscribe(
      data => {
        this.services = data;
        // console.log(data);
      },
      error => {
        // console.log("error");
      }
    );
  }

  onChangeService(service:any) {
    if(service.value)
    {
      this.category = '';
      this.categories=this.services[service.value].categories;
      this.service = this.services[service.value].id;
        
    }
    else{
      this.service = '';
      this.category = '';
      this.categories = []
    }
    this.getDonners();
  }

  onChangeState(state:any) {
    if(state.value)
    {
      this.district = ''
      this.state = this.states[state.value].name;
      this.districts = []
      for(let i in this.states[state.value].districts)
      {
        this.districts.push(this.states[state.value].districts[i]);
      }
    }
    else{
      this.state = ''
      this.district = ''
      this.districts = []
    }
    this.getDonners();
  }

  onChangeDistrict(district:any) {
   
    this.district = district.value;
    
    this.getDonners();
  }


  
  onChangeCategory(category:any) {
    // if(service.value)
    //   this.categories=this.categories[service.value].categories;
    this.category = category.value;
    // this.cityInfo=this.stateInfo[0].Cities;
    // console.log(category.value);
    this.getDonners();
  }

  

  upvoteDonner = (donner:any) => {
    
    this.api.upvoteDonner(donner).subscribe(
      data => {
        // this.getMovies();
      },
      error => {
        // console.log("error");
      }
    );

  }



}
