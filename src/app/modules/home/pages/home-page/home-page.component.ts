import { Component, OnInit } from '@angular/core';
import { SystemSystemService } from 'src/app/core/services/system-service.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {
  resultSystem:any;
  constructor(
    private ViewApi:SystemSystemService,
    private ngxService: NgxUiLoaderService
  ) { }

  ngOnInit() {
    this.ngxService.start();
    setTimeout(() => {
      this.ngxService.stop(); // stop foreground spinner of the master loader with 'default' taskId
    }, 100);
  }


} 
