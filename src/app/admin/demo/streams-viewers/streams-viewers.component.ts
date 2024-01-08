import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdminService } from '../../admin.service';
@Component({
  selector: 'app-streams-viewers',
  templateUrl: './streams-viewers.component.html',
  styleUrls: ['./streams-viewers.component.css'],
})
export class StreamsViewersComponent implements OnInit {
  constructor(private Aroute: ActivatedRoute, private Api: AdminService) {}

  ngOnInit(): void {
    this.getDetails();
  }

  datas: any;
  id: any;
  getDetails() {
    this.Aroute.queryParams.subscribe((e: any) => {
      this.Api.getStreamVIewer(e.id).subscribe((e: any) => {
        console.log(e[0].users);
        this.datas = e[0].users;
      });
    });
  }
}
