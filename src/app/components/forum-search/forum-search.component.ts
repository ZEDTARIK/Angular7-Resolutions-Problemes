import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Forum } from 'src/app/models/Ticket';
import { ForumService } from 'src/app/services/forum.service';

@Component({
  selector: 'app-forum-search',
  templateUrl: './forum-search.component.html',
  styleUrls: ['./forum-search.component.css']
})
export class ForumSearchComponent implements OnInit {

  forums:Forum[] = [];
  
  constructor(private formService: ForumService,
    private  router: Router) { }

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

  onDetail(id: string) {
     this.router.navigate(['/forum/detail/', id]);
  }

}
