import { Component, OnInit } from '@angular/core';
import { ForumService } from './../../services/forum.service';
import { Forum } from './../../models/forum';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-forum-details',
  templateUrl: './forum-details.component.html',
  styleUrls: ['./forum-details.component.css']
})
export class ForumDetailsComponent implements OnInit {

  id: string;
  forum : Forum;

  constructor(private formService: ForumService, 
              private activedRoute: ActivatedRoute ) { }

  ngOnInit() {
    this.id = this.activedRoute.snapshot.params['id'];
    this.formService.getDataById(this.id)
    .subscribe((data) => {
        this.forum = data;
    });
  }

}
