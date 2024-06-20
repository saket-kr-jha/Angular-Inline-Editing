import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent {

  @Input() message: any;
  @Output() childEvent = new EventEmitter<string>();

  childMessage = "Hello from child componeenet";

  childComponent= "This is the data from child component which needs to be displayed in parent component";

  sendMessage(){
    this.childEvent.emit(this.childMessage);
  }
}
