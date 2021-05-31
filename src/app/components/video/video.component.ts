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
    this.APIRoute = '/playlistItems?playlistId=' + this.playlist + '&maxResults=50&part=snippet&key=AIzaSyBlKSy2HuQVA5RsjHFxJ3hXSnLTSsGlRPA';
    this.API.getData(this.APIRoute).then((value) => {
      this.data = value;
      let j = 0;
      for(let i=0; i<this.data.items.length; i++)
      {
        if(this.data.items[i].snippet.title === "Deleted video")
        {
          console.log(i)
          this.data.items.splice(i,1)
          break;
        }
      }
      // console.log(this.data.items[0].snippet.resourceId.videoId, this.data.items[6].snippet.thumbnails.default.url);
    })
  }

}
