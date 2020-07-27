import { Component, OnInit } from '@angular/core';
import {ServiceService} from './service.service';  
import { FormGroup, FormControl,Validators } from '@angular/forms';  
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  id;
  constructor(private ServiceService: ServiceService,private _Activatedroute:ActivatedRoute) { }  
  data: any;  
  LoginForm: FormGroup;  
  submitted = false;   
  EventValue: any = "Save";  
  emailPattern = "^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$";
  
  ngOnInit(): void {  
    // this.getdata();  
    
    

    this.LoginForm = new FormGroup({  
      device_type: new FormControl("web"),
      player_id: new FormControl("e4befabd-7828-422f-894a-641256259705"),
      email:new FormControl("",[Validators.required,Validators.email]),
      password:new FormControl("",[Validators.required])

    })    
  }  
   
  Save() {   
    this.submitted = true;  
    
     if (this.LoginForm.invalid) {  
            return;  
     }  
    this.ServiceService.postData(this.LoginForm.value).subscribe((data: any[]) => {  
      this.data = data;  
      console.log(this.data);
      this.resetFrom();  
  
    })  
  }  
   
  
  resetFrom()  
  {     

    this.LoginForm.reset();  
    this.EventValue = "Save";  
    this.submitted = false;   
  }

}
