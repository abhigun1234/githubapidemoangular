import { Component, OnInit } from '@angular/core';
import {GithubService} from '..//github.service'
@Component({
  selector: 'app-githubuser',
  templateUrl: './githubuser.component.html',
  styleUrls: ['./githubuser.component.css'],
  providers:[GithubService]
})
export class GithubuserComponent implements OnInit {
  searchResult;
  searchCount;
  constructor(private github :GithubService) { }

  ngOnInit() {
  }

  /*
  this method used to subscribe the github user details
  */
  getUserSetails()
  {
    this.github.fetchGithubUserDetails().subscribe(res=>{

      console.log(res)
      this.searchResult=res
      this.searchCount=this.searchResult.total_count;
    })

  }
}
