import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppErrorHandler } from './common/app-error-handler';
import { FollowersService } from './services/followers.service';
import { FollowersComponent } from './followers/followers.component';

@NgModule({
  declarations: [
    AppComponent,
    FollowersComponent
  ],
  imports: [
    BrowserModule,
    HttpModule
  ],
  providers: [{provide: ErrorHandler, useClass: AppErrorHandler}, FollowersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
