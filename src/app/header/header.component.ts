import {Component, OnInit, Input} from '@angular/core';
import {AppService} from "../app.service";
import {AuthService} from "../shared/auth.service";

@Component({
  selector: 'at-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() title:string;

  constructor(private service:AppService,
              public authService:AuthService) { }

  ngOnInit() {
  }

}
