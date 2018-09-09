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

  // esconder form para adicionar novo video
  hideNewVideo: boolean = true;

  constructor(private _videoService: VideoService) { }
  
// REF:\zVIDEO\.20\(min.2.30)
// subscribe ao serviço "video.service.ts" que liga Angular com BD
  ngOnInit() {
    this._videoService.getVideos()
      .subscribe(resVideoData => this.videos = resVideoData);
  }

  onSelectedVideo(video:any){
    this.selectedVideo = video;
    this.hideNewVideo = true;
    console.log(this.selectedVideo);
  }

  // REF:\zVIDEO\.22\(min.5.00)
  // REF:\zVIDEO\.22\(min.10.00) EXPLAIN-ALL!!
  // recebe video submetido
  // adicionar video submetido na BD
  // subscribe para obter data na resposta(resNewVideo)
  // push resNewVideo no array(videos)
  onSubmitAddVideo(video: Video) {
    this._videoService.addVideo(video)
      .subscribe(resNewVideo => {
        this.videos.push(resNewVideo);
        this.hideNewVideo = true;
        this.selectedVideo = resNewVideo;
      });
  }
  // REF:\zVIDEO\.23\(min.3.40, 5.30)
  onUpdateVideoEvent(video: any){
    this._videoService.updateVideo(video)
      .subscribe(resUpdatedVideo => video = resUpdatedVideo);
    // para fazer "clear" da view detail
    this.selectedVideo = null;
  }

  // REF:\zVIDEO\.22\(min.7.00)
  // esconder/revelar form para adicionar novo video
  newVideo(){
    this.hideNewVideo = false;
  }

}
