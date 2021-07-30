import { Component, OnInit } from '@angular/core';

@Component({
 selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewServer = false;
  serverCreationStatus = "No server was created!";
  serverName = 'Test';
  userName = '';
  serverCreated = false;
  servers = ['testserver1', 'testserver2']

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    },2000);
   }
  ngOnInit() {
  }

  onServerCreation(){
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = " server was created! Name is " + this.serverName;

  }

  onUpdateServerName(event : Event){
    this.serverName = (<HTMLInputElement> event.target).value;
  }

  resetOnClick(){
    this.userName = '';
  }


}
