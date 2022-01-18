import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import PostModel from 'src/app/models/post.model';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-post-item',
  templateUrl: './post-item.component.html',
  styleUrls: ['./post-item.component.css']
})
export class PostItemComponent implements OnInit {

  constructor(public _ps: PostsService, public _r: Router) { }

  @Input()
  public post: PostModel

  ngOnInit(): void {
  }

}
