import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs'; 
import { Router } from '@angular/router'; 

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  baseurl:any;
  
  httpHeaders = new HttpHeaders({'Content-Type':  'application/json'});

  get windowRef() {
    return window
  }

  constructor(
    private http: HttpClient, 
    private router: Router
  ) { 
      this.baseurl = location.origin;
      this.baseurl = this.baseurl + "/api";
    }

  register(data:any) {


    return this.http.post(this.baseurl+'/auth/register',data);
  }

  login(data:any) {

    return this.http.post(this.baseurl+'/auth/login',data, { withCredentials: true });
    
  }

  logout(data:any) {

    return this.http.post(this.baseurl+'/auth/logout',data, { withCredentials: false });
    
  }

  user() {

    return this.http.get(this.baseurl+'/auth/user', { withCredentials: false });
  }

  contribute(data:any) {


    return this.http.post(this.baseurl+'/api/providers',data, { withCredentials: true });

  }

  askforhelp(data:any) {


    return this.http.post(this.baseurl+'/api/requests',data, { withCredentials: true });

  }

  getAllServices(): Observable<any>{
    
    return this.http.get(this.baseurl + '/api/services/',
    {headers: this.httpHeaders})
        
  }

  getAllDonners(service:any,category:any, verified:any, state:any, district:any, city:any): Observable<any>{
    if(service==null)
    service=''
    if(category==null)
    category=''
    if(verified==null)
    verified=''
    if(state==null)
    state=''
    if(district==null)
    district=''
    if(city==null)
    city=''
    
    return this.http.get(this.baseurl + '/api/providers/?service='+service+'&category='+ category+'&verified='+verified+'&state='+state+'&district='+district+'&city='+city,
    {headers: this.httpHeaders})
  }

  getAllRequests(service:any,category:any, verified:any, state:any, district:any, city:any): Observable<any>{
    if(service==null)
    service=''
    if(category==null)
    category=''
    if(verified==null)
    verified=''
    if(state==null)
    state=''
    if(district==null)
    district=''
    if(city==null)
    city=''
    
    return this.http.get(this.baseurl + '/api/requests/?service='+service+'&category='+ category+'&verified='+verified+'&state='+state+'&district='+district+'&city='+city,
    {headers: this.httpHeaders})
  }

  upvoteDonner(recipient: any): Observable<any>{
    recipient.upvote++;
    const body = { upvote : recipient.upvote };
    return this.http.patch(this.baseurl + '/api/providers/' + recipient.id + '/', body,
    {headers: this.httpHeaders})
  }

  upvoteRequest(recipient: any): Observable<any>{
    recipient.upvote++;
    const body = { upvote : recipient.upvote };
    return this.http.patch(this.baseurl + '/api/providers/' + recipient.id + '/', body,
    {headers: this.httpHeaders})
  }

}
