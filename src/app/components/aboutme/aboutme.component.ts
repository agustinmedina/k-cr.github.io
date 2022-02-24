import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-aboutme',
  templateUrl: './aboutme.component.html',
  styleUrls: ['./aboutme.component.css']
})
export class AboutmeComponent implements OnInit {
  myPortfolio: any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.myPortfolio = data;
    });
  }

}
