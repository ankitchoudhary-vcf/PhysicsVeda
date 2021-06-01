import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { YoutubeService } from 'src/app/services/youtube.service';
import { DomSanitizer } from '@angular/platform-browser';


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
  // iframe : any;
  url : any;

  constructor(private route: ActivatedRoute, private API: YoutubeService, private sanitizer: DomSanitizer) { }

  
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
          // console.log(i)
          this.data.items.splice(i,1)
          break;
        }
      }

      let iframe : string= this.data.items[0].snippet.resourceId.videoId;
      iframe = 'https://www.youtube.com/embed/' + iframe;
      this.url = this.sanitizer.bypassSecurityTrustResourceUrl(iframe);
    })
  }

  SetURL(id : any){
    console.log(id)
    let iframe = 'https://www.youtube.com/embed/' + id;
    console.log(iframe)
    this.url = this.sanitizer.bypassSecurityTrustResourceUrl(iframe);
  }
  

}
