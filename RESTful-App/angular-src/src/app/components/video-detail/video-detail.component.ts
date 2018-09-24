import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Video } from '../../models/video';

// REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
// REF:\zVIDEO\.23\(min.1.30, 5.30)
// REF:\zVIDEO\.24\(min.1.30, 6.00)
@Component({
  selector: 'app-video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // ORIG.
  // inputs: ['video'],
  // outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  // data-binding com video-center.component.html
  @Input() video: Video;
  // REF:\zVIDEO\.18\(min.2.30)
  // REF:\zVIDEO\.23+24\(min.1.30, 5.30)
  @Output() updateVideoEvent = new EventEmitter();
  @Output() deleteVideoEvent = new EventEmitter();
  editTitle = false;
  // ORIG. qd "inputs: ['video']""
  // video: Video;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick() {
    this.editTitle = true;
  }
  /*
    NOTA: componente video-detail é apenas responsável pela apresentação dos detalhes
          updateVideo() e deleteVideo() vão invocar eventos que vão ser capturados
          em video-center.componente.
          video-center.componente vai chamar video.service.ts que faz o update na BD
  */
 // necessita "outputs:['updateVideoEvent']"
  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }

  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }
}
