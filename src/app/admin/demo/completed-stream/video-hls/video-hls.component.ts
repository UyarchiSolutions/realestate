import { Component, Input, OnInit, DoCheck, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-video-hls',
  templateUrl: './video-hls.component.html',
  styleUrls: ['./video-hls.component.css']
})
export class VideoHlsComponent {

  @Input('urlDate') urlDate: any

  constructor() {
  }


}
