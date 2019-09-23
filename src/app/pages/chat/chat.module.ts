import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatComponent } from './chat.component';
import { ChatWindowComponent } from './chat-window/chat-window.component';
import { NbChatModule, NbCardModule, NbInputModule } from '@nebular/theme';
import { ChatSelectorComponent } from './chat-selector/chat-selector.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ChatService } from 'src/app/services/chat.service';
import { SearchComponent } from './search/search.component';


@NgModule({
  declarations: [ChatComponent, ChatWindowComponent, ChatSelectorComponent, SearchComponent],
  imports: [
    CommonModule,
    NbChatModule,
    FlexLayoutModule,
    NbCardModule,
    NbInputModule
  ],
  providers: [ChatService]
})
export class ChatModule { }
