import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  myPortfolio:any;
  projectList: any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.projectList = data.projects;
    });
  }
}
