import { Component, OnInit } from '@angular/core';
import { ProjectService } from '../project.service';

@Component({
  selector: 'app-project',
  templateUrl: './project.component.html',
  styleUrls: ['./project.component.css']
})
export class ProjectComponent implements OnInit {


  // d: Int16Array;
  a: String='';
  b: String='';
  c: String='';
  d: String='';
  e: String='';
  f: String='';
  g: String='';
  h: String='';
  i: String='';
  j: String='';
  k: String='';
  l: String='';
  m: String='';
  n: String='';
  o: String='';
  p: String='';
  q: String='';
  r: String='';
  s: String='';
  t: String='';
  u: String='';
  v: String='';
  w: String='';
  x: String='';
  y: String='';
  z: String='';
  aa: String='';
  ab: String='';
  ac: String='';
  oo: String='';
  
  location : Object;

  constructor(private pro :ProjectService){}

    ngOnInit()
    {
      this.pro.getLocation().subscribe((data)  =>{
        console.log(data);
        this.oo=data.status;
        this.a = data.result.number_of_pages;
        this.b = data.result.subject_place;  
        this.c = data.result.covers;
        this.d = data.result.lc_classification;
        this.e = data.result.latest_revision;
        this.f = data.result.genres;
        this.g = data.result.source_record;
        this.h = data.result.title;
        this.i = data.result.languages;
        this.j = data.result.subjects;
        this.k = data.result.publish_country;
        this.l = data.result.by_statement;
        this.m = data.result.oclc_number;
        this.n = data.result.type;
        this.o = data.result.revision;
        this.p = data.result.publisher;
        this.q = data.result.last_modified;
        this.r = data.result.key;
        this.s = data.result.author;
        this.t = data.result.publish_places;
        this.u = data.result.pagination;
        this.v = data.result.created;
        this.w = data.result.dewey_decimal_class;
        this.x = data.result.notes;
        this.y = data.result.identifier;
        this.z = data.result.lccn;
        this.aa = data.result.isbn_10;
        this.ab= data.result.publish_date;
        this.ac= data.result.works;
        
      }

      
        
        )

    }
  

  // constructor() { }

  // ngOnInit(): void {
  // }

}


