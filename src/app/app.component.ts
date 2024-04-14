import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  currentFib: string;

  constructor() {
    this.currentFib = '';
  }

  calculateFib(whichOne: HTMLInputElement):boolean{
    const n = parseInt(whichOne.value);

    if (isNaN(n)) {
        this.currentFib = "Input is not a number";
    } else if (!Number.isInteger(n)) {
      this.currentFib = "Input is not an integer";
    } else if (n <= 0) {
      this.currentFib = 'The Fibonacci number is: 0';
    } else if (n === 1) {
      this.currentFib = 'The Fibonacci number is: 1';
    } else {
        let prev = 0;
        let current = 1;
        for (let i = 2; i <= n; i++) {
            const temp = current;
            current += prev;
            prev = temp;
        }
        this.currentFib = "The Fibonacci number is:" + current.toString();
    }
    return false;
  }
 
}
