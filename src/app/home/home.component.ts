import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  bannerMessage = 'Default Message';

  constructor() { }

  ngOnInit(): void {
  }

  updateBanner(event: string) {
    this.bannerMessage = event;
  }

}
