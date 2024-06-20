import { Component, OnInit } from '@angular/core';
import { Observable, Observer, Subscription, interval, take } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  time: Observable<number>;
  intervalSubscription!: Subscription;

  constructor() {
    this.time = interval(1000).pipe(take(50));
  }
  title = 'angularLocalStorageCrud';

  ngOnInit() {
    let customObservable = new Observable((observer: Observer<any>) => {
      let count = 0;
      setInterval(() => {
        observer.next(count);
        if (count > 3) {
          observer.error('Count is greater than 3');
        }
        if (count > 2) {
          observer.complete();
        }
        count++;
      }, 1000);
    });

    this.intervalSubscription = customObservable.subscribe({
      next: (val) => console.log(val),
      error: (error) => console.log(error),
      complete: () => console.log('complete'),
    });
  }
}
