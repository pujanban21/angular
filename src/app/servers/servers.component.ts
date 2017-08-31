import { Component, OnInit } from '@angular/core';

@Component({
  selector: '[app-servers]',  /* this is change to element now*/
  //three ways to define the selector based on the need
  //selector:'app-servers', ---> if you want to call it like tags itself
  //selector: '.app-servers', ---> recognize this as a class withing <div> tag
  //selector: '[app-servers]', -----> recognize as element inside the <div> tag
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus ='no server was created';
  constructor() {
    setTimeout(()=> {
      this.allowNewServer = true;
    }, 2000);
   }

  ngOnInit() {
  }

  onCreateServer(){
    this.serverCreationStatus = 'Server was created';
  }
}
