import { Injectable } from '@angular/core';
import { IUser } from '../model/IUser';

@Injectable({
  providedIn: 'root',
})
export class UserService {

  users : IUser[] = [];

  addUser(user : IUser) :void{
    this.users.push(user);
  }

}
