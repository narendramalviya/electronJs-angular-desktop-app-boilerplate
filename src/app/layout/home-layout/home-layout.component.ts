import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-layout',
  templateUrl: './home-layout.component.html',
  styleUrls: ['./home-layout.component.scss']
})
export class HomeLayoutComponent implements OnInit {
  finacialYears = ['2020-21','2021-22','2022-23'];
  currentFinancialYear = '2022-23';
  constructor() { }

  ngOnInit(): void {
  }

}
