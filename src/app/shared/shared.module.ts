import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { BodyComponent } from './components/body/body.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavbarComponent,
    HeaderComponent,
    BodyComponent,
    FooterComponent
  ]
})
export class SharedModule { }
