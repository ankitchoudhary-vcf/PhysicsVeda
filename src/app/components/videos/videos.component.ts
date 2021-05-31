import { Component, OnInit } from '@angular/core';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-videos',
  templateUrl: './videos.component.html',
  styleUrls: ['./videos.component.css']
})
export class VideosComponent implements OnInit {

  constructor(private API: YoutubeService) { }

  ngOnInit(): void {
    this.API.getData('/playlists?part=snippet&channelId=UCvFUbROutPnoIgfZrpJ6gNw&key=AIzaSyDdUAIMenXoNLQRA3QWbxxg_DQh2rzMwLo').then((value) => {
      console.log(value);
    })
  }

}
