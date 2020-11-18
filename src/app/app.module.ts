import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxFunnelModule } from 'devextreme-angular';
import { DevexpressComponent } from './components/devexpress/devexpress.component';
import { TelerikComponent } from './components/telerik/telerik.component';

@NgModule({
  declarations: [AppComponent, DevexpressComponent, TelerikComponent],
  imports: [BrowserModule, DxFunnelModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
