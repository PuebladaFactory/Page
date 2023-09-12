import { Component } from '@angular/core';
import { AfterViewInit, HostListener, ViewChild, ElementRef, Renderer2 } from '@angular/core';
import { CdkScrollable } from '@angular/cdk/scrolling';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent {
  isScrolled = false;
  navbarImage: string = 'https://i.ibb.co/3cxFRRG/imageedit-56-6976167606.png';
  scrolledNavbarImage: string = 'https://i.ibb.co/kmYdw3H/Pueblada-Factory-2.png';

  @HostListener('window:scroll', [])
  onScroll(): void {
    this.isScrolled = window.scrollY > 0;
    if (window.scrollY > 0) {
      this.navbarImage = this.scrolledNavbarImage;
    } else {
      this.navbarImage = 'https://i.ibb.co/3cxFRRG/imageedit-56-6976167606.png';
    }
  }

  constructor(private renderer: Renderer2, private el: ElementRef) { }

  desactivarOffcanvas() {
    const offcanvas = this.el.nativeElement.querySelector('#offcanvasWithBothOptions');
    if (offcanvas) {
      this.renderer.removeClass(offcanvas, 'show'); // Quita la clase 'show' para desactivar el offcanvas
    }
  
  }
  
}
