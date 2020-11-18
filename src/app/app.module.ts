import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DxFunnelModule } from 'devextreme-angular';
import { DevexpressComponent } from './components/devexpress/devexpress.component';
import { TelerikComponent } from './components/telerik/telerik.component';
import { ChartsModule } from '@progress/kendo-angular-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import 'hammerjs';




@NgModule({
  declarations: [AppComponent, DevexpressComponent, TelerikComponent],
  imports: [BrowserModule, DxFunnelModule, ChartsModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
