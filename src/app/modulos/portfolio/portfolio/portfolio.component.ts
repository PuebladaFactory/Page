import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

   public mostrar:boolean = false;

 /*  onMouseOver() {
    this.mostrar = true;
  }

  onMouseOut() {
    this.mostrar = false;
  }  */

  public valorVariable: boolean = false;

  @HostListener('mouseenter', ['$event'])
  onMouseEnter(event: Event) {
    const targetElement = event.target as HTMLElement;
    console.log("esto es mostrar: ", this.mostrar);
    if (targetElement.classList.contains('mi-elemento')) {
      // El cursor pasó por encima del elemento con la clase 'mi-elemento'
      // Realiza las acciones que desees aquí
      this.mostrar = true;
    }
  }


  @HostListener('mouseleave', ['$event'])
  onMouseLeave(event: Event) {
    const targetElement = event.target as HTMLElement;
    console.log("esto es mostrar: ", this.mostrar);
    
    if (targetElement.classList.contains('mi-elemento')) {
      // El cursor pasó por encima del elemento con la clase 'mi-elemento'
      // Realiza las acciones que desees aquí
      this.mostrar = false;
    }
  }

}
