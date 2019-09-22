import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { NbChatModule, NbCardModule } from '@nebular/theme';
import { ChatSelectorComponent } from './chat-selector/chat-selector.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatService } from 'src/app/services/chat.service';


@NgModule({
  declarations: [ChatComponent, ChatWindowComponent, ChatSelectorComponent],
  imports: [
    CommonModule,
    NbChatModule,
    FlexLayoutModule,
    NbCardModule
  ],
  providers: [ChatService]
})
export class ChatModule { }
