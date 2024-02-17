import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
 @Output() counterFired = new EventEmitter<number>();
  count: NodeJS.Timeout | undefined;
lastNumber:number = 0;
 comnstructor(){}
  onStartGame(){

    this.count = setInterval(()=>{
      this.counterFired.emit(this.lastNumber + 1);
      this.lastNumber++;
    }, 1000)
  }

  onStopGame(){
    clearInterval(this.count);
  }
}
