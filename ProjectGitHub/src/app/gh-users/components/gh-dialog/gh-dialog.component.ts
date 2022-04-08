import { Component, OnInit } from '@angular/core';
import { UserRepos } from '../../models/ghRepos';
import { GhUser } from '../../models/ghUsers';
import { GhApiService } from '../../services/gh-api.service';

@Component({
  selector: 'app-gh-dialog',
  templateUrl: './gh-dialog.component.html',
  styleUrls: ['./gh-dialog.component.css']
})
export class GhDialogComponent implements OnInit {

  username: string = ""
  user: GhUser | null = null
  userRepos: UserRepos[] = [] 

  constructor(private ghService: GhApiService) { }

  ngOnInit(): void {
    this.ghService.findUser(this.username).subscribe(
      (gUser) => {
        this.user = gUser
        this.ghService.findRepos(this.username).subscribe(
          (gRepos) => {
            this.userRepos = gRepos || []
          }
        )
      }
      
    )

  }

}
