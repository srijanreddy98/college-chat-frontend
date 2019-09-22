import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { ChatModule } from './chat/chat.module';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbLayoutModule, NbIconModule } from '@nebular/theme';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';



@NgModule({
  declarations: [PagesComponent],
  imports: [
    PagesRoutingModule,
    CommonModule,
    NbLayoutModule,
    NbIconModule,
    NbEvaIconsModule,
    ChatModule
  ]
})
export class PagesModule { }
