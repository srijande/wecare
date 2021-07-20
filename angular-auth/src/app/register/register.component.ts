import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, FormControl, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import Swal from 'sweetalert2';
import * as firebase from 'firebase/app';
import { ApiService } from '../api.service';
import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  form = new FormGroup({
    username : new FormControl('', [Validators.required, Validators.pattern("[0-9 ]{10}")]),
    first_name : new FormControl('', [Validators.required, ]),
    lsst_name : new FormControl('', [Validators.required, ]),
    password : new FormControl('', [Validators.required, Validators.minLength(6) ]),
    cpassword : new FormControl('', [Validators.required, ]),

  });

  form_verify = new FormGroup({
    otp : new FormControl('',[Validators.required, Validators.pattern("[0-9]{6}")])
  });

  windowRef: any;
  otpSended= 0;
  btn_txt = "Send OTP";
  btn2_txt= "Verify OTP";
  num = "+91";

  constructor(
    private router: Router,
    private api:ApiService,
    public afAuth: AngularFireAuth, // Inject Firebase auth service
  ) {  }

  ngOnInit(): void {
    this.windowRef = this.api.windowRef
    this.windowRef.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container',{
      'size': 'invisible',
      'callback': (response) => {
        // reCAPTCHA solved, allow signInWithPhoneNumber.
        // ...
      },
      'expired-callback': () => {
        // Response expired. Ask user to solve reCAPTCHA again.
        // ...
      }
    })

    this.windowRef.recaptchaVerifier.render()
    
  }

  submit(): void {

    const appVerifier = this.windowRef.recaptchaVerifier;
    this.num = "+91"+this.form.controls.username.value;
    this.btn_txt = "Sending OTP...";
    this.otpSended = 1;
    firebase.auth().signInWithPhoneNumber(this.num, appVerifier)
      .then(result => {
        this.windowRef.confirmationResult = result;
        this.otpSended = 1;
        this.btn_txt = "Send OTP";
      })
      .catch( error => {
          Swal.fire({
            title: '',
            text: 'Unusual activity detected from you. Try again later..!!',
            icon: 'error'
          })
         this.btn_txt = "Send OTP";
        }
      );

  }

  change_state() {
    this.otpSended = (1 ^ this.otpSended);
  }
  
  verifyLoginCode() {
    this.btn2_txt = "Validating...";
    
    this.windowRef.confirmationResult.confirm(this.form_verify.controls.otp.value)
    .then( result => {
      
      this.savedata();

    })
    .catch( error => {

      Swal.fire({
        title: 'Wrong OTP',
        text: '',
        icon: 'error'
      })

      this.otpSended = (1 ^ this.otpSended);
    });
  }

  savedata() {


    this.api.register( this.form.getRawValue()).subscribe(
        () => { 

          Swal.fire({
            title: 'Registration Successfull.',
            text: 'You Can Login Now.',
            icon: 'success'
          })

          this.router.navigate(['/login']);
        },
        err => {
          Swal.fire({
            title: '',
            text: 'Your mobile number is already registered with us, please try again with another mobile number.',
            icon: 'warning'
          })
          this.otpSended = (1 ^ this.otpSended);
        }

      );
  }

  



}
