import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';  
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  id;
  
  constructor(private ServiceService: ServiceService,private _Activatedroute:ActivatedRoute) { }  
  data: any;  
  message:any;
  SignUp: FormGroup;  
  submitted = false;  
  EventValue: any = "Save";  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  ngOnInit(): void {  

    this.SignUp = new FormGroup({  
      device_type: new FormControl("web"),
      player_id: new FormControl("e4befabd-7828-422f-894a-641256259705"),
      first_name: new FormControl("",[Validators.required]),        
      last_name: new FormControl("",[Validators.required]),     
      password: new FormControl("",[Validators.required]),     
      phone: new FormControl("",[Validators.required,Validators.pattern(/^[0-9]\d*$/)]),  
      email:new FormControl("",[Validators.required,Validators.email]),  
    })    
  }  
   
  Save() {   
    debugger
    this.submitted = true;  
    
     if (this.SignUp.invalid) {  
            return;  
     }  
    this.ServiceService.postData(this.SignUp.value).subscribe((message: any[]) => {  
      this.message = message;  
      console.log(this.message);
      this.resetFrom();  
  
    })  
  }  
  
  
  resetFrom()  
  {     
    this.SignUp.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  }
}
