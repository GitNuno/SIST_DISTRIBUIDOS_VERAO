import { Component, OnInit, Input } from '@angular/core';

// REF:\zVIDEO\.18\(min.7.30) EXPLAIN-ALL!!
@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  // funciona mas dá erro no VScode, sol. @Input() na class
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {
  // funciona mas dá erro no VScode
  // @Input() video: String = '';
  
  // REF:\zVIDEO\.18\(min.2.30)
  private editTitle: boolean = false;
  constructor() { }

  ngOnInit() {
  }

  ngOnChanges() {
    this.editTitle = false;
  }

  onTitleClick(){
    this.editTitle = true;
  }
}
