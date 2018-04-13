import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DataService {

  private goals = new BehaviorSubject<any>(['My First football Club', 'My Second Club']);
  goal = this.goals.asObservable();

  constructor() { }
  
  changeGoal(goal){
    this.goals.next(goal);
  }

}
