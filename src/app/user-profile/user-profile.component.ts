import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
user: User = {
  nom :"ZOZO",
  prenom :"Sarah",
}
ngOnInit(): void {
  
}

constructor(){

}
getFullName(user : User){
  return `${user.nom} ${user.prenom}`
}
}

class User {
  nom ?: string;
  prenom ?: string;
}