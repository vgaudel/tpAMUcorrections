import { Component, inject } from '@angular/core';
import { Role } from '../../../model/Role';
import { IUser } from '../../../model/IUser';
import { FormsModule } from '@angular/forms';
import { UserService } from '../../../services/user-service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-form-v1',
  imports: [FormsModule],
  templateUrl: './user-form-v1.html',
  styleUrl: './user-form-v1.scss',
})
export class UserFormV1 {
  _userService = inject(UserService);
  _router = inject(Router);
  roles = Object.values(Role);

  user: IUser = {
    id : '',
    userName : '',
    firstName : '',
    lastName : '',
    email : '',
    newPassword : '',
    mainGroup : '',
  }

  role: Role = Role.User;

  onSubmit(): void {
    console.log('User:', this.user, 'Role:', this.role);
    this._userService.addUser(this.user);
    this._router.navigateByUrl("/welcome");
  }

  reset() : void {
    this.user = {id : '',
    userName : '',
    firstName : '',
    lastName : '',
    email : '',
    newPassword : '',
    mainGroup : '',};
    this.role = Role.User;
  }
}
