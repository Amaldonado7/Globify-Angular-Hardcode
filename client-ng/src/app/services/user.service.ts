import { Injectable } from '@angular/core';
import { User } from '../entities/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  user: User;

  constructor() { }

  public getUserProfile(): User{
      this.user = {
        id: 1,
        name: 'Ariadna Maldonado',
        image: '../../assets/no-image.png',
      }

      return this.user;
  }
}
