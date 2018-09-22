import { Component, OnInit, Inject, Optional } from '@angular/core';
import { APP_BASE_HREF, isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  posts: any;
  URL: string;

  constructor(private http: HttpClient,
    @Optional() @Inject(APP_BASE_HREF) origin: string,
    @Inject(PLATFORM_ID) private platformId: Object) {
      this.URL = `${origin ? origin : '/api'}/posts`;
  }

  ngOnInit() {
    const platform = isPlatformBrowser(this.platformId) ?
    'in the browser' : 'on the server';

    console.log('called Home', platform, (new Date()).toString());
    this.http.get(this.URL)
      .subscribe(resp => {
        this.posts = resp;
      });
  }

}
