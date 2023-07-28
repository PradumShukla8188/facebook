import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent {
  message: string = '';
  buttonClickedMessage:string='';
  
  //receive data child 
  receivedMessage: string='';
  @Input() childReceivemsg: string = '';
  receiveMessage(message: string) {
    this.receivedMessage = message;
  }
  sendButtonMsg(){
    this.buttonClickedMessage='Hello from Parent Component Button Clicked';
  }

  //receive input box vlaue child component 
  childInputValue: string = '';

  updateChildInputValue(value: any): void {
    this.childInputValue = value;
  }
}
