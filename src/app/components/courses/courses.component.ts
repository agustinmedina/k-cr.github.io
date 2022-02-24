import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-courses',
  templateUrl: './courses.component.html',
  styleUrls: ['./courses.component.css']
})
export class CoursesComponent implements OnInit {

  myPortfolio: any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.myPortfolio = data;
    });
  }
}
