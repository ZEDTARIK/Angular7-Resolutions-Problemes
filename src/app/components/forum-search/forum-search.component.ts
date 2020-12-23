import { Component, OnInit } from '@angular/core';
import { Forum } from 'src/app/models/forum';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-search',
  templateUrl: './forum-search.component.html',
  styleUrls: ['./forum-search.component.css']
})
export class ForumSearchComponent implements OnInit {

  forums:Forum[];
  
  constructor(private formService: ForumService) { }

  ngOnInit() {
    this.formService.getData()
    .subscribe((data: any) => {
      this.forums = data.map(el => {
        return {
          id: el.payload.doc.id,
          ...el.payload.doc.data()
        } as Forum;
      });
    });
  }


  tracking(forum: Forum) {
    return forum ? forum.id : undefined ;
  }

}
