import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contactus',
  templateUrl: './contactus.component.html',
  styleUrls: ['./contactus.component.css']
})
export class ContactusComponent implements OnInit {
contact={
  name : '',
  email : '',
  subject :'',
  message :''};

isDisable=true;


 
  constructor() { }

  ngOnInit(): void {
  }
  
  changeName1(e){
    this.contact.name=e.target.value;
    
    if (this.contact.name=="" || this.contact.email ==""||this.contact.subject==""||this.contact.message=="") 
    {
      this.isDisable=true;
      
    }
    else 
    {
      this.isDisable=false;
      
    } 
    
   
  }
  changeName2(b){
    this.contact.email=b.target.value;
    if (this.contact.name=="" || this.contact.email ==""||this.contact.subject==""||this.contact.message=="") 
  
    {
      this.isDisable=true;
      
    }
    else 
    {
      this.isDisable=false;
      
    }
   
  }
  changeName3(c){
   
   
    this.contact.subject=c.target.value;
    if (this.contact.name=="" || this.contact.email ==""||this.contact.subject==""||this.contact.message=="") 
   
    {
      this.isDisable=true;
      
    }
    else 
    {
      this.isDisable=false;
      
    }
   
  }
  changeName4(d){
   
    this.contact.message=d.target.value;
    if (this.contact.name=="" || this.contact.email ==""||this.contact.subject==""||this.contact.message=="") 
   
    {
      this.isDisable=true;
      
    }
    else 
    {
      this.isDisable=false;
      
    }
   
  }
 
 
 }


