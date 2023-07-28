import { Component,Input,Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent {
  
  message = '';
  //recieve data parent component to child component
  @Input() receivedMessage: string = '';
  @Input()recievedbuttonClickedMessage:string='';
  
  //send data child component to parent component
  @Output() messageEvent = new EventEmitter<string>();

  sendMessage() {
    const message = 'Hello from child component button clicked!';
    this.messageEvent.emit(message);
  }

  //send input box value to parent component
  @Output() valueChanged: EventEmitter<string> = new EventEmitter<string>();
  childInputValue: string = '';

  onInputChange(): void {
    this.valueChanged.emit(this.childInputValue);
  }
}
