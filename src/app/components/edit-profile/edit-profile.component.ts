import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import israeliIdValidator from 'src/app/validators/israeliid.validator';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {

  constructor(public _fb: FormBuilder, public _us: UserService, public _r: Router) { }

  public myForm: FormGroup

  ngOnInit(): void {
    // this.myForm = new FormGroup({
    //   name: new FormControl('Johnny', Validators.required),
    //   username: new FormControl('', [Validators.required, Validators.minLength(4)]),
    //   img: new FormControl('', [Validators.required]),
    // })
    this.myForm = this._fb.group({
      name: [this._us.user.name, Validators.required],
      username: [this._us.user.username, [Validators.required, Validators.minLength(4)]],
      img: [this._us.user.img, [Validators.required]],
      id: [this._us.user.id, [Validators.required, Validators.minLength(9), Validators.maxLength(9), israeliIdValidator]]
    })
  }

}

