import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiFacultyService {

  apiUrl = "http://scalablelabs.com/darshan_faculty/getllFacultyList.php";
  constructor(private _http : HttpClient) { }

  getAllFaculties(){
    return this._http.get(this.apiUrl);
  }

  getFacultyByID(id){
    return this._http.get(this.apiUrl + "/");
  }
}
