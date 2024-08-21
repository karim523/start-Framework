import { Component } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css',
})
export class PortfolioComponent {
  portfolioSrc: string[] = [
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
    './assets/images/poert1.png',
    './assets/images/port2.png',
    './assets/images/port3.png',
  ];
  flag: boolean = true;
  modelImg: string = '';
  hideModle(element: EventTarget | null, img: HTMLImageElement): void {
    if (element == img) return;
    this.flag = true;
  }
}
