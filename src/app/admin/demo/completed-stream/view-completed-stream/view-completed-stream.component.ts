import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from 'src/app/admin/admin.service';

@Component({
  selector: 'app-view-completed-stream',
  templateUrl: './view-completed-stream.component.html',
  styleUrls: ['./view-completed-stream.component.css']
})
export class ViewCompletedStreamComponent {
  complated: any;
  cloud: any;
  play_video(item: any) {
    this.complated = item;
  }

  id: any;

  constructor(private api: AdminService, private route: ActivatedRoute) {
    route.queryParamMap.subscribe((res: any) => {
      this.id = res.params.id;
      this.get_cloud();
    })
  }

  get_cloud() {
    this.api.get_cloud(this.id).subscribe((res: any) => {
      this.cloud = res;
      if (res.length != 0) {
        this.complated = res[0]
      }
    })
  }
}
