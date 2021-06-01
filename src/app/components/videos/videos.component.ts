import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  data: any;

  constructor(private API: YoutubeService) { }

  ngOnInit(): void {
    this.API.getData('/playlists?part=snippet&channelId=UCvFUbROutPnoIgfZrpJ6gNw&maxResults=50&key=AIzaSyBlKSy2HuQVA5RsjHFxJ3hXSnLTSsGlRPA').then((value) => {
      this.data = value;
      let length = this.data.items.length;
      this.data.items.splice(length-1, 1);
      this.data = this.data.items;
    })
  }

}
