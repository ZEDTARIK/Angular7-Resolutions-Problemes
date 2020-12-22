import { Component, OnInit } from '@angular/core';
import { ForumService } from './../../services/forum.service';
import { Forum } from './../../models/forum';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {

  forums: Forum[];

  constructor(private formService: ForumService) { }

  ngOnInit() {
  }

}
