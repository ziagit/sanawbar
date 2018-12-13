import { Component, OnInit } from '@angular/core';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {
 status;
 user;
  constructor(private sharedService: SharedService) {
    this.sharedService.change.subscribe(
      res =>{
       this.status=res.loginstatus;
       this.user=res.user;
      }
    )
   }

  ngOnInit() {
  }

}
