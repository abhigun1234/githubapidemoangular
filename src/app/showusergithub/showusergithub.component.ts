import { Component, OnInit } from '@angular/core';
import {GithubusersService} from '..//githubusers.service'
@Component({
  selector: 'app-showusergithub',
  templateUrl: './showusergithub.component.html',
  styleUrls: ['./showusergithub.component.css']
})
export class ShowusergithubComponent implements OnInit {
  private searchResult;
  constructor(private github:GithubusersService) { }

  ngOnInit() {
  }

  search(searchText)
  {
    console.log(searchText)
    this.github.searchUser(searchText).subscribe(res=>{

      console.log(res)
      this.searchResult=res
    })
  }
}
