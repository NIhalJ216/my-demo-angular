import {
  Component,
  Output,
  EventEmitter,
  ViewChild,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css'],
})
export class CockpitComponent {
  // Sending data to parent app component
  @Output() serverCreated = new EventEmitter<{
    serverName: string;
    serverContent: string;
  }>();
  @Output('bpCreated') bluePrintCreated = new EventEmitter<{
    bluePrintName: string;
    bluePrintContent: string;
  }>();
  // newServerName = '';
  // newServerContent = '';
  // Accessing template using viewChild
  @ViewChild('serverContentInput', { static: true })
  serverContentInput: ElementRef;

  // used LocalReference
  onAddServer(nameInput: HTMLInputElement) {
    this.serverCreated.emit({
      serverName: nameInput.value,
      serverContent: this.serverContentInput.nativeElement.value,
    });
  }

  onAddBlueprint(nameInput: HTMLInputElement) {
    this.bluePrintCreated.emit({
      bluePrintName: nameInput.value,
      bluePrintContent: this.serverContentInput.nativeElement.value,
    });
  }
}
