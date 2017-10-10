import { Component, OnInit } from '@angular/core';
import { RepoService } from './repo.service';

@Component({
  selector: 'app-root',
  template: `
      <h1>Repositories</h1>
      <ul *ngFor="let repo of repos">
        <li>{{repo.id}} => {{repo.full_name}}</li>
      </ul>
    `,
  styleUrls: ['./app.component.css'],
  providers: [RepoService]
})
export class AppComponent implements OnInit{
    repos: any[];
   constructor(private repo: RepoService){
      
   }
   ngOnInit(): void {
    this.repos = this.repo.getRepos();
  }
}
