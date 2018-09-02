import { Component, OnInit } from '@angular/core';
import { Video } from '../video';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css']
})
export class VideoCenterComponent implements OnInit {
// REF:\zVIDEO\.17\(min.2.00)
  // Declaração de 4 Videos
  // usado em video-center.component.html: [videos]="videos"
videos: Video[] = [
    {"_id":"1", "title":"Title 1", "url":"Url 1", "description":"desc 1"},
    {"_id":"2", "title":"Title 2", "url":"Url 2", "description":"desc 2"},
    {"_id":"3", "title":"Title 3", "url":"Url 3", "description":"desc 3"},
    {"_id":"4", "title":"Title 4", "url":"Url 4", "description":"desc 4"}
  ];

  // REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
  selectedVideo: Video;

  constructor() { }

  ngOnInit() {
  }

  onSelectedVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
