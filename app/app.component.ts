import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['app.component.css'],
})
export class AppComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    const promise = new Promise(resolve => {
      console.log("Promise Triggered");
      setTimeout(()=>{
      resolve("Promise Working");
      resolve("Promise Working2");
      resolve("Promise Working3");
      resolve("Promise Working4");
    },1000)
  })

  
    promise.then((result) => console.log(result));


const observable = new Observable(subs=>{
  console.log("Observable Triggered");
  setTimeout(()=>{
    subs.next("Observable Working");
    subs.next("Observable Working2");
    subs.next("Observable Working3");
    subs.next("Observable Working4");
  },1000)
});
// observable.pipe(
//   filter(r=>r === "Observable Working")
// ).subscribe(result=>console.log(result));
}
}

 
