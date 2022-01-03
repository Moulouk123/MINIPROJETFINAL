import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../model/user.model';
import { Role } from 'src/app/model/role.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  /* users: User[] = [{"username":"admin","password":"123","roles":['ADMIN']},
                    {"username":"moulouk","password":"123","roles":['USER']} ];
 
                    */
  apiURL: string = 'http://localhost:8081/users/login';
  public loggedUser: string;
  public isloggedIn: Boolean = false;
  public roles: Role[];
  constructor(private router: Router , private http : HttpClient) { }
  getUserFromDB(username: string): Observable<User> {
    const url = `${this.apiURL}/${username}`;
    return this.http.get<User>(url);
  }
  signIn(user :User){
    this.loggedUser = user.username;
    this.isloggedIn = true;
    this.roles = user.roles;
    localStorage.setItem('loggedUser',this.loggedUser);
    localStorage.setItem('isloggedIn',String(this.isloggedIn));
    }
 /* SignIn(user: User): Boolean {
    let validUser: Boolean = false;
    this.users.forEach((curUser) => {
      if (user.username === curUser.username && user.password == curUser.password) {
        validUser = true;
        this.loggedUser = curUser.username;
        this.isloggedIn = true;
        this.roles = curUser.roles;
        localStorage.setItem('loggedUser', this.loggedUser);
        localStorage.setItem('isloggedIn', String(this.isloggedIn));
      }
    });
    return validUser;
  }*/

  /*isAdmin(): Boolean {
    if (!this.roles) //this.roles== undefiened
      return false;
    return (this.roles.indexOf('ADMIN') > -1);
  }*/
  isAdmin():Boolean{
    let admin: Boolean = false;
    if (!this.roles) //this.roles== undefiened
    return false;
    this.roles.forEach((curRole) => {
    if(curRole.role == 'ADMIN') {
    admin = true;
    }
    });
    return admin;
    }
  logout() {
    this.isloggedIn = false;
    this.loggedUser = undefined;
    this.roles = undefined;
    localStorage.removeItem('loggedUser');
    localStorage.setItem('isloggedIn', String(this.isloggedIn));
    this.router.navigate(['/login']);
  }


  setLoggedUserFromLocalStorage(login: string) {
    this.loggedUser = login;
    this.isloggedIn = true;
    this.getUserRoles(login);
  }
  getUserRoles(username :string){
    this.getUserFromDB(username).subscribe((user: User)=>{
    this.roles = user.roles;
    });
    }
/*  getUserRoles(username: string) {
    this.users.forEach((curUser) => {
      if (curUser.username == username) {
        this.roles = curUser.roles;
      }
    });
  }*/
}
