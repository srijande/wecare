import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import { Emitters } from '../emitters/emitters';
import { ApiService } from '../api.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    password : new FormControl('', [Validators.required, Validators.minLength(6) ]),

  });
  constructor(
    private router: Router,
    private api: ApiService
  ) {  }

  ngOnInit(): void {
    
  }

  submit(): void {
    this.api.login( this.form.getRawValue()).subscribe(
      (res: any) => {
        Swal.fire({
          title: '',
          text: 'Login Successfull.',
          icon: 'success',
          // showConfirmButton: false,
          // showCancelButton: true,
          // confirmButtonText: 'Okey',
          // cancelButtonText: 'No, keep it'
        })
        Emitters.authEmitter.emit(true);
        this.router.navigate(['/'])
      },
      err => {
        
          
        Swal.fire({
          title: '',
          text: 'Please Enter All Correct Details.',
          icon: 'warning',
          // showConfirmButton: false,
          // showCancelButton: true,
          // confirmButtonText: 'Okey',
          // cancelButtonText: 'No, keep it'
        })
        
      }
    );
    
  }
}
