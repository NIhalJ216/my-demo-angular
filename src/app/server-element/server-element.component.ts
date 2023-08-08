import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  ContentChild,
  DoCheck,
  ElementRef,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChanges,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  // this remove unique attributes from tags and provide global style changes
  // default is Emulates, None, Native
  encapsulation: ViewEncapsulation.Emulated,
})
export class ServerElementComponent
  implements
    OnInit,
    OnChanges,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  // Receiving Data from app component
  @Input('srvElement') element: { type: string; name: string; content: string };
  @Input() name: string;
  @ViewChild('heading', { static: true }) header: ElementRef;
  @ContentChild('contentParagraph', { static: true }) paragraph: ElementRef;

  constructor() {
    console.log('Contructor called');
  }

  // Used to detect change
  ngOnChanges(changes: SimpleChanges) {
    console.log('ngOnChanges called');
    console.log('Changes', changes);
  }

  ngOnInit() {
    console.log('ngOnInit Called');
    console.log('text Content: ', this.header.nativeElement.textContent);
    console.log(
      'text Content of paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  // Used to detect change
  ngDoCheck() {
    console.log('ngDoCheck Called');
  }

  // Called only once as we used ng-Content don't get calls again
  ngAfterContentInit() {
    console.log('ngAfterContentInit Called');
    console.log(
      'text Content of paragraph: ',
      this.paragraph.nativeElement.textContent
    );
  }

  // Called after content change detected
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked Called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit Called');
    console.log('textContent', this.header.nativeElement.textContent);
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked Called');
  }

  ngOnDestroy() {
    console.log('ngOnDestroy Called');
  }
}
