import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import {RouterModule} from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';


import { AppComponent } from './layout/app.component';
import {NavBarComponent} from './layout/navbar/navbar.component';
import {SideBarComponent} from './layout/sidebar/sidebar.component';
import {USersComponent} from './usersManagement/users.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    SideBarComponent,
    USersComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot([
      {path: '', redirectTo : 'users' , pathMatch: 'full'},
      {path: 'users', component : USersComponent},
      {path: '**', redirectTo: 'users'}
      ])
  ],
  providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
