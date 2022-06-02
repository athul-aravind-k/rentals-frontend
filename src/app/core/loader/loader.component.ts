import { Component, OnInit } from '@angular/core';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-loader',
  templateUrl: './loader.component.html',
  styleUrls: ['./loader.component.scss'],
})
export class LoaderComponent implements OnInit {
  public loading: boolean;
  constructor(private loaderService: LoaderService) {
    this.loaderService.isLoading.subscribe((loadingStatus) => {
      this.loading = loadingStatus;
    });
  }
  ngOnInit() {}
}
