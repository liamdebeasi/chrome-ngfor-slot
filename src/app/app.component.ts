import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  data = [];
  title = 'angular-app';

  go() {
    setInterval(() => {
      let a = Math.random();
      setTimeout(() => {
        this.data.push(a);
        console.log('this.data',this.data);
      },0)
    },1000);
  }
}
