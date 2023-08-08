import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  serverElements = [
    { type: 'server', name: 'TestServer', content: 'Just a Test Server!' },
  ];

  onServerAdded(serverData: { serverName: string; serverContent: string }) {
    this.serverElements.push({
      type: 'server',
      name: serverData.serverName,
      content: serverData.serverContent,
    });
  }

  onBlueprintAdded(blueprintData: {
    bluePrintName: string;
    bluePrintContent: string;
  }) {
    this.serverElements.push({
      type: 'blueprint',
      name: blueprintData.bluePrintName,
      content: blueprintData.bluePrintContent,
    });
  }

  onChangeFirst() {
    this.serverElements[0].name = 'changed!';
  }

  onDestroyFirst() {
    this.serverElements.splice(0, 1);
  }
}
