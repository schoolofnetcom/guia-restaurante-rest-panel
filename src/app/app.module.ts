import { RouterModule, Routes } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RestaurantsModule } from './restaurants/restaurant.module';
import { HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
import { AppHttpService } from './app-http.service';

const appRoutes: Routes = [
  {path: '', redirectTo: '/dashboard', pathMatch: 'full'}
];

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RestaurantsModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    AppHttpService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
