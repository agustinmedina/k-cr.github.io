import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/services/portfolio.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  myPortfolio: any;
  mySoftskills: any;
  myHardskills: any;
  constructor(private portfolioData:PortfolioService) { }

  ngOnInit(): void {
    this.portfolioData.getData().subscribe(data => {
      this.mySoftskills = data.softskills;
      this.myHardskills = data.hardskills;
    });
  }

}
