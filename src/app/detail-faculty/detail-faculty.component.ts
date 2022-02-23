import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { ApiFacultyService } from '../api-faculty.service';

@Component({
  selector: 'app-detail-faculty',
  templateUrl: './detail-faculty.component.html',
  styleUrls: ['./detail-faculty.component.css']
})
export class DetailFacultyComponent implements OnInit {

    id = null;
     
    faculty = {};
  
  constructor(private _activatedRoute : ActivatedRoute , private _api : ApiFacultyService ) { }

  ngOnInit(): void {
    this.id = this._activatedRoute.snapshot.paramMap.get('id');
    var a = this._api.getFacultyByID(this.id);
    a.subscribe(
      (res:any)=>this.faculty = res
    );
  }

}
