import { Component } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent {
 empName: string = "MAXWELL"
 empImage:string = "https://cdn-icons-png.flaticon.com/512/4974/4974985.png"
 empDesg:string=""
 empSalary:string=""

 userAdd = ()=>{
  alert("Add  button clicked")
 }

 getEmpName(event:any){
  console.log(event.target.value);
  this.empName=event.target.value
  
 }

 userSubmit(username:any){
  console.log(username);
  if(username.value){
    alert(`${username.value} added successfully`)
  }
  else{
    alert('fill the form')
  }
 }

 empSbmit(){
  if(!this.empDesg || !this.empName || !this.empSalary){
    alert('please fill the form')
  }
  else{
    alert(`employee name ${this.empName} \n employee salary ${this.empSalary} \n employee deignation isv ${this.empDesg}`)
  }
 }
}
