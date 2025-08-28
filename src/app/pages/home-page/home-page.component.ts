import { Component } from '@angular/core';
import { FeedComponent } from '../../components/feed/feed.component';
import { Post } from '../../type/type';
import { HttpClient } from '@angular/common/http';
import { OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [FeedComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss'
})
export class HomePageComponent implements OnInit {

  posts: Post[] = [];


  constructor(private httpClient: HttpClient) { }


  ngOnInit(): void {
    this.fetchData();

}

  fetchData(){
    this.httpClient.get<{posts: Post[]}>('http://localhost:3000/friends')
    .subscribe((data:{posts: Post[]})=>{
      this.posts = data.posts;
    });
  }

}
