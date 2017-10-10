import { Injectable } from "@angular/core";

@Injectable()
export class RepoService{
    getRepos(){
       let repos = [
            {id:'1', full_name: 'test1'},
            {id:'2', full_name: 'test2'},
            {id:'3', full_name: 'test3'},
            {id:'4', full_name: 'test4'},
            {id:'5', full_name: 'test5'}
          ];
          return repos;
    }
}
