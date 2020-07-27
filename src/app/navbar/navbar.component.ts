import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  id;
  isShown:boolean=true;
  constructor(private _Activatedroute:ActivatedRoute) { }

  ngOnInit(): void {
    // this._Activatedroute.paramMap.subscribe(params=>{
    //   this.id =params.get('id');
    //   if(this.id != null)
    //   {
        
    //   }
    // }) 
  }

}
