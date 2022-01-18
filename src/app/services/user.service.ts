import { Injectable } from '@angular/core';
import UserInterface from '../interfaces/user.interface';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  public user: UserInterface = {
    name: "Johnny Johnniahoo",
    username: "@Jojiahoo",
    img: "https://render.fineartamerica.com/images/rendered/default/flat/round-beach-towel/images/artworkimages/medium/1/walter-white-aka-heisenberg-enki-art.jpg?&targetx=-236&targety=0&imagewidth=1260&imageheight=788&modelwidth=788&modelheight=788&backgroundcolor=8EB1FC&orientation=0",
    id: "023456783"
  }

  constructor() { }

  login(us: UserInterface) {
    this.user = us
  }

  logout() {
    this.user = undefined
  }

}
