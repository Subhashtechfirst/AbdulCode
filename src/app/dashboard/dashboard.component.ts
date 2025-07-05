import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor() { }
 product:any=[1,2,3,4,5,6,7]
  ngOnInit(): void {
  }


   alertDeletFuntion(){
    confirm("Are You sure Do you want to delete this product")
   }
}
