import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  time: Observable<number>;
  intervalSubscription!: Subscription;

  constructor(){
    this.time =interval(1000).pipe(take(50));
  }
  title = 'angularLocalStorageCrud';

  ngOnInit() {
    let customObservable = new Observable((observer : Observer<any>)=>{
      let count = 0;
       setInterval(()=>{
         observer.next(count);
         count++;
       },1000)
     });
     
     this.intervalSubscription = customObservable.subscribe((val)=>{
      console.log(val);
    })
  
  }




}
