import { Component } from '@angular/core';
import { AfterViewInit, HostListener, ViewChild } from '@angular/core';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isScrolled = false;

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0;
  }

  constructor() { }

  
}
