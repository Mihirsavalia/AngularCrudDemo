import { Component, OnInit } from '@angular/core';
import { ApiFacultyService } from '../api-faculty.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculties',
  templateUrl: './faculties.component.html',
  styleUrls: ['./faculties.component.css']
})
export class FacultiesComponent implements OnInit {

  faculties = [];
  constructor(private _api : ApiFacultyService , private _router : Router ){ }

  ngOnInit(): void {
    this._api.getAllFaculties().subscribe(
      (res:any)=>this.faculties = res
    );
  }

  detailFaculty(id){
    console.log("Button clicked" + id);
    this._router.navigate([ './faculty/',id ]);
  }

}
