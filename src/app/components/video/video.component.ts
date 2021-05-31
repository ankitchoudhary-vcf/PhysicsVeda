import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';

@Component({
  selector: 'app-video',
  templateUrl: './video.component.html',
  styleUrls: ['./video.component.css']
})
export class VideoComponent implements OnInit {

  playlist : any;
  video : any;
  APIRoute: any;
  data : any;

  constructor(private route: ActivatedRoute, private API: YoutubeService) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params)=>{
      this.playlist = params.get('id');
      this.playlist = this.playlist.slice(4)
    })
    this.APIRoute = '/playlistItems?playlistId=' + this.playlist + '&part=snippet&key=AIzaSyDdUAIMenXoNLQRA3QWbxxg_DQh2rzMwLo';
    this.API.getData(this.APIRoute).then((value) => {
      console.log(value);
      this.data = value;
    })
  }

}
