import { Component, OnInit } from '@angular/core';
import { Video } from '../video';
import { VideoService } from '../video.service';


@Component({
  selector: 'app-video-center',
  templateUrl: './video-center.component.html',
  styleUrls: ['./video-center.component.css'],
  providers:[VideoService]
})
export class VideoCenterComponent implements OnInit {
// REF:\zVIDEO\.17\(min.2.00)
// before: Declaração de 4 Videos (hardcoded)
// usado em video-center.component.html
// array do tipo "Video"
videos: Array <Video>;

  // REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
  selectedVideo: Video;

  constructor(private _videoService: VideoService) { }

  
// REF:\zVIDEO\.20\(min.2.30)
// subscribe ao serviço "video.service.ts" que liga Angular com BD
  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectedVideo(video:any){
    this.selectedVideo = video;
    console.log(this.selectedVideo);
  }

}
