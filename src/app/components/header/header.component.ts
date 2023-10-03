import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  title:string = 'angular-project';
constructor() {}

ngOnInit(): void { }

buttonToggling(){
  console.log('toggle button')
}
}
