import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavModule } from './modulos/nav/nav.module';
import { HomeComponent } from './home/home.component';
import { NosotrosModule } from './modulos/nosotros/nosotros.module';
import { HeaderModule } from './modulos/header/header.module';
import { ServiciosModule } from './modulos/servicios/servicios.module';
import { PortfolioModule } from './modulos/portfolio/portfolio.module';
import { AsideModule } from './modulos/aside/aside.module';
import { ContactoModule } from './modulos/contacto/contacto.module';
import { ScrollingModule } from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    NosotrosModule,
    NavModule,
    HeaderModule,
    ServiciosModule,
    PortfolioModule,
    AsideModule,
    ContactoModule,
    ScrollingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
