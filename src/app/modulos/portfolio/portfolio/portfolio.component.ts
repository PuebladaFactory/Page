import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  
  ngOnInit(): void {
    
  }

   public mostrar1:boolean = false;
   public mostrar2:boolean = false;
   public mostrar3:boolean = false;

 /*  onMouseOver() {
    this.mostrar = true;
  }

  onMouseOut() {
    this.mostrar = false;
  }  */

  public valorVariable: boolean = false;

  @HostListener('mouseenter'|| 'mouseleave', ['$event'])
  onMouseEnter(event: Event) {
    const targetElement = event.target as HTMLElement;
   /*  console.log("esto es mostrar1: ", this.mostrar); */
    if (targetElement.classList.contains('mi-elemento1')) {
      // El cursor pasó por encima del elemento con la clase 'mi-elemento'
      // Realiza las acciones que desees aquí
      this.mostrar1 = !this.mostrar1;
      console.log("esto es mostrar1: ", this.mostrar1);
    } else if (targetElement.classList.contains('mi-elemento2')) {
      // El cursor pasó por encima del elemento con la clase 'mi-elemento'
      // Realiza las acciones que desees aquí
      this.mostrar2 = !this.mostrar2;
      console.log("esto es mostrar1: ", this.mostrar2);
    } else if (targetElement.classList.contains('mi-elemento3')) {
      // El cursor pasó por encima del elemento con la clase 'mi-elemento'
      // Realiza las acciones que desees aquí
      this.mostrar3 = !this.mostrar3;
      console.log("esto es mostrar1: ", this.mostrar3);
    }
  }


  

}
