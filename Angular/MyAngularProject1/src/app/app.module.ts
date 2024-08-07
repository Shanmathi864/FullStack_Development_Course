import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RightTopComponent } from './right-top/right-top.component';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { AboutComponent } from './about/about.component';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
// import { CalculatorComponent } from './calculator/calculator.component';
import { CalculatorService } from './calculator.service';

const ROUTES: Routes = [
  { path : 'home', component : HomeComponent},
  { path : 'contact', component : ContactComponent},
  { path : 'about', component : AboutComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    RightTopComponent,
    HomeComponent,
    ContactComponent,
    AboutComponent,
    // CalculatorComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(ROUTES)
  ],
  providers: [
    provideClientHydration(),
    CalculatorService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
