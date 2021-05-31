import {HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class YoutubeService {

  constructor(private http: HttpClient) { }

  baseUrl = "https://youtube.googleapis.com/youtube/v3"

  private getBaseUrl(route: String) {
    if (route) {
      return this.baseUrl + route;
    }
    return this.baseUrl
  }

  async postForm(route: String, token: any) {
    return await this.http.post(this.getBaseUrl(route), token).toPromise();
  }
  async getData(route: String) {
    return await this.http.get(this.getBaseUrl(route)).toPromise();
  }

}
