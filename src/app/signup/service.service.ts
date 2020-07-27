import { Injectable } from '@angular/core';  
import { HttpClient,HttpHeaders }    from '@angular/common/http';  
@Injectable({  
  providedIn: 'root'  
})  
  
export class ServiceService {  
  
constructor(private http: HttpClient) { }  
  httpOptions = {  
    headers: new HttpHeaders({  
      'Content-Type': 'application/json'  
    })  
  }    
 
  
  postData(formData){  
    return this.http.post('https://dev-api.alldaydr.com/api/users/sign_up.json',formData);  
  }  
    
} 