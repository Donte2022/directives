import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'directivePractice';

  // numbers: number [] = [1,2,3,4,5];
  onlyOdd: boolean = false;
  oddNumbers = [1, 3, 5];
  evenNumbers = [2,4,];
  value = 5;
}
