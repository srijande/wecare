import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms'; 
import {Router} from '@angular/router';
import * as StateData from '../districts.json';  
import { ApiService } from '../api.service';
import Swal from 'sweetalert2'


@Component({
  selector: 'app-contribute',
  templateUrl: './contribute.component.html',
  styleUrls: ['./contribute.component.css']
})


export class ContributeComponent implements OnInit {
  form = new FormGroup({
    provider : new FormControl('', [Validators.required, ]),
    contact : new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    service : new FormControl('', [Validators.required, ]),
    category : new FormControl(''),
    state : new FormControl('', [Validators.required, ]),
    district : new FormControl('', [Validators.required, ]),
    user : new FormControl('', [Validators.required, ]),
    about : new FormControl(''),
  });
  constructor( 
    private router: Router,
    private api:ApiService
  ) {  }

 


services: any
categories: any

service: any
category: any
verified: any

 

states :any = (StateData as any).default

districts = new Array

thisstate : any




  ngOnInit(): void {

    this.getServices();
    this.getAccount();

  }

  submit(): void {
    
    this.api.contribute(this.form.getRawValue()).subscribe(() =>
     this.router.navigate(['services'])
     );
  }

  getAccount = () => {
    this.api.user().subscribe(
      (res: any) => {
        this.form.controls.user.setValue(res.id);
      },
      err => {
        Swal.fire({
          title: 'You are not logged in',
          text: 'You need to login first to add a service provider!',
          icon: 'warning',
          // showCancelButton: true,
          // confirmButtonText: 'Okey',
          // cancelButtonText: 'No, keep it'
        })
        this.router.navigate(['login'])

      }
    );

    
  }

 
  getServices = () => {
    this.api.getAllServices().subscribe(
      data => {
        this.services = data;
      },
      error => {
      }
    );
  }




  onChangeService(service:any) {
    if(service.value)
    {

      var nm=service.value
      nm++;
      this.form.controls.service.setValue(nm); 

      this.form.controls.category.setValue('');
      this.categories=this.services[service.value].categories;
        
    }
    else{
      this.categories = []
    } 
  }



  onChangeCategory(category:any) {
    this.form.controls.category.setValue(
      category.value
    ); 
  }


  onChangeState(state:any) {
    if(state.value)
    {
      this.form.controls.district.setValue('');
      this.districts = []

      for(let i in this.states[state.value].districts)
      {
        this.districts.push(this.states[state.value].districts[i]);
      } 

      this.form.controls.state.setValue(
        this.states[state.value].name
      ); 
    }
    else{
      this.districts = []
    } 
  }

  onChangeDistrict(district:any) {
   
      this.form.controls.district.setValue(
        district.value
      ); 
  }







}
