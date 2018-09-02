import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { Video } from '../video';
 // REF:\zVIDEO\.17\(min.2.30)
@Component({
  selector: 'video-list',
  templateUrl: './video-list.component.html',
  styleUrls: ['./video-list.component.css'],
  outputs:['Selectvideo']
  // editor não reconhece, mas funciona... usei @Input() abaixo na class
  // inputs: ['videos']
})
export class VideoListComponent implements OnInit {

  @Input() videos: String = '';
  
  // REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
  public Selectvideo = new EventEmitter();
  constructor() { }

  ngOnInit() {
 
  }
  onSelect(vid: Video){
    this.Selectvideo.emit(vid);

    // Teste - para ver na consola do browser
    // console.log(JSON.stringify(vid));
  }

}
