import { Component, OnInit, EventEmitter } from '@angular/core';

// REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
// REF:\zVIDEO\.23\(min.1.30, 5.30)
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // funciona mas dá erro no VScode, sol. @Input() na class
  inputs: ['video'],
  // chama evento updateVideoEvent
  outputs: ['updateVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  // funciona mas dá erro no VScode
  // @Input() video: String = '';
  
  // REF:\zVIDEO\.18\(min.2.30)
  // REF:\zVIDEO\.23\(min.1.30)
  editTitle: boolean = false;
  updateVideoEvent = new EventEmitter();
  video: any;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }
  /* 
    NOTA: componente video-detail é apenas responsável pela apresentação dos detalhes
          updateVideo() vai invocar um evento que vai ser capturado no componente video-center
          e o componente video-center vai chamar video.service.ts que faz o update na BD
  */
  updateVideo(){
    this.updateVideoEvent.emit(this.video);
  }
}
