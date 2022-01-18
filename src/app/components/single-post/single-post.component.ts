import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import PostModel from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-single-post',
  templateUrl: './single-post.component.html',
  styleUrls: ['./single-post.component.css']
})
export class SinglePostComponent implements OnInit {

  constructor(public _ps: PostsService, public _r: Router,
    public _acr: ActivatedRoute) { }

  public post: PostModel
  ngOnInit(): void {
    this.post = this._ps.posts.find(p => p.id == this._acr.snapshot.params.id)
  }

}
