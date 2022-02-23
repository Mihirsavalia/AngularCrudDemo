import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-studentdetail',
  templateUrl: './studentdetail.component.html',
  styleUrls: ['./studentdetail.component.css']
})
export class StudentdetailComponent implements OnInit {
  StudentName = "";
  RollNumber = "";
  // isdisabled=true;
  SelectedStudent = null;

  StudentArray = [
    // { name : null , rollNO : null },
    ];

  constructor() { }
  
  ngOnInit(): void {
  }

  AddStudent(){
    let tempStu ={ name : this.StudentName , rollNO : this.RollNumber};
    this.StudentArray.push(tempStu);

    this.StudentName = "";
    this.RollNumber = "";
    
    alert("User Added Successfully..!!")
    
    // this.isdisabled=false;
  }

  deleteStudent(i){
    if(confirm("Are You Sure You Want To Delete")){
      this.StudentArray.splice(i,1);
    }
  }

  selectStudent(i){
    this.SelectedStudent = i; 
    this.StudentName = this.StudentArray[i].name;
    this.RollNumber = this.StudentArray[i].rollNO;
  
  }


  EditStudent(){
    this.StudentArray[this.SelectedStudent].name = this.StudentName;
    this.StudentArray[this.SelectedStudent].rollNO = this.RollNumber;
    this.SelectedStudent = null ;
    this.StudentName = "";
    this.RollNumber = ""; 
  }


  // check(e){
  //   if(e.target.value=="")

  //   {
  //     this.isdisabled=true;

  //   }
  //   else
  //   {
  //   this.isdisabled=false;
  //   }
 
  // }

}
