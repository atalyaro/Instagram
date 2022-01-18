import { Injectable } from '@angular/core';
import PostModel from '../models/post.model';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  public posts: PostModel[] = [
    new PostModel("https://coverme.co.il/wp-content/uploads/2018/10/IMG_1934-copy.jpg", "wow"),
    new PostModel("https://res-1.cloudinary.com/crunchbase-production/image/upload/c_lpad,h_256,w_256,f_auto,q_auto:eco/pk0n3jxkwbiahlq3iocf", "amazing"),
    new PostModel("https://pbs.twimg.com/profile_images/684436742959579136/fjRnGks6.jpg", "blah")
  ]
  constructor() { }

  add({ img, description }) {
    this.posts.push(new PostModel(img, description))
  }

  del(id: number) {
    this.posts = this.posts.filter(p => p.id != id)
  }
}
