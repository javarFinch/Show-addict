import { Injectable } from '@angular/core';
import { Users } from './Users';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {
  user:Users | null = null;
  loggedInUser = new BehaviorSubject(this.user)
  currentUser = this.loggedInUser.asObservable();

  constructor() { }

  setLoggedUser(loggedUser:Users):void {
    this.loggedInUser.next(loggedUser);
  }
}
