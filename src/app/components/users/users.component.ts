import { Component } from '@angular/core';
import data  from './db.json';  

interface User {  
    id:Number;
    name: String;  
    email: String;  
    password: String;  
}  

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent {
  users: User[] = data;  
}

    

    
