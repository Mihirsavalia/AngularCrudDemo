import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';
 
interface Location

{
  
  status : String;
  // result : String;
  result : {
    number_of_pages:String;
    subject_place : String;
  covers : String;
  lc_classification : String;
  latest_revision : String;

  genres : String;
  source_record: String; 
  title : String;
  languages : String;
  subjects : String;
  publish_country : String;
  by_statement: String;
  oclc_number: String;
  type : String;
  revision : String;
  publisher: String;
  last_modified: String;
  key : String;
  author: String;
  publish_places: String;
  pagination : String;
  created : String;
  dewey_decimal_class: String;
  notes: String;
  identifier: String;
  lccn: String;
  isbn_10: String;
  publish_date: String;
  works : String;
  
  };

  // a:String;
  
}

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient) { } 
  

  getLocation() {

    

   

    return this.http.get<Location>(' http://openlibrary.org/api/get?key=/b/OL1001932M')

   }
}
