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
    this.API.getData('/playlists?part=snippet&channelId=UCvFUbROutPnoIgfZrpJ6gNw&key=AIzaSyDdUAIMenXoNLQRA3QWbxxg_DQh2rzMwLo').then((value) => {
      console.log(value);
      this.data = value;
      console.log(this.data.items.length, this.data.items[0].id, this.data.items[0].snippet.title, this.data.items[0].snippet.thumbnails.default.url);
    })
  }

}
