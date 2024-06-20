import { Component, ViewChild } from '@angular/core';
import { ChildComponent } from '../child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent {
  message: any;
  childData: any;
  parentMessage = "I am parent";

  @ViewChild(ChildComponent) child : ChildComponent | any

  onChildEvent(e: any){
    console.log(e)
    this.message = e;
  }

  displayChild(){
    console.log(this.child)
    this.childData = this.child.childComponent;
  }

}

