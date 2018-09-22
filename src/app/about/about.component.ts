import { Component, OnInit, Inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
  }

  ngOnInit() {
    const platform = isPlatformBrowser(this.platformId) ?
    'in the browser' : 'on the server';

    console.log('called About', platform, (new Date()).toString());
  }
}
