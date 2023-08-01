import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styleUrls: ['./server.component.css'],
})
export class ServerComponent {
  server = 10;
  status = 'offline';
  allowNewServer = false;
  serverCreationStatus = 'No Server Was Created!';
  serverName = '';
  serverNames = 'ServerNames';
  serverCreated = false;
  servers = ['devServer', 'testServer'];
  showSecret = false;
  log = [];

  constructor() {
    this.status = Math.random() > 0.5 ? 'online' : 'offline';
    setTimeout(() => {
      this.allowNewServer = true;
    }, 3000);
  }

  onCreateServer() {
    this.serverCreated = true;
    this.servers.push(this.serverName);
    this.serverCreationStatus = 'Server is Created Name is ' + this.serverName;
  }

  onUpdateServerName(event) {
    this.serverName = event.target.value;
  }

  getColor() {
    return this.status === 'online' ? 'green' : 'red';
  }

  onToggleDisplay() {
    this.showSecret = !this.showSecret;
    // this.log.push(this.log.length + 1);
    this.log.push(new Date());
  }
}
