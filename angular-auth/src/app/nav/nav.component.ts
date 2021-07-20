import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Emitters} from '../emitters/emitters'; 
import { ApiService } from '../api.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  authenticated = false;

  constructor( 
    private api: ApiService
    ) {
  }

  ngOnInit(): void {
    this.getAccount();
    Emitters.authEmitter.subscribe(
      (auth: boolean) => {
        this.authenticated = auth;
      }
    );
  }

  getAccount = () => {
    this.api.user().subscribe(
      (res: any) => {
        // this.message = `Hi ${res.username}`;
        Emitters.authEmitter.emit(true);
      },
      err => {
        // this.message = 'You are not logged in';
        Emitters.authEmitter.emit(false);
      }
    );
  }


  @ViewChild('navbarToggler') navbarToggler:ElementRef;
  logout(): void {
    this.api.logout({})
      .subscribe(() => this.authenticated = false);
  }
  navBarTogglerIsVisible() {
    return this.navbarToggler.nativeElement.offsetParent !== null;
  }
  collapseNav() {
    if (this.navBarTogglerIsVisible()) {
      this.navbarToggler.nativeElement.click();
    }
  }


}
