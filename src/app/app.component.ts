import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 oddNumbers : number[]=[];
 evenNumbers : number[]=[];

  onGetCounter(emittedCounter:number){
    if(emittedCounter % 2 === 0){
      this.evenNumbers.push(emittedCounter);
    }else this.oddNumbers.push(emittedCounter);

  }
}
