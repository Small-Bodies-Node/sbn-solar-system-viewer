import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NgxWrapperModule } from 'sbn-solar-system-viewer/ngx/ngx-wrapper/';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxWrapperModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
