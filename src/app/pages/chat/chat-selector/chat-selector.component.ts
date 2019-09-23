import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-selector',
  templateUrl: './chat-selector.component.html',
  styleUrls: ['./chat-selector.component.scss']
})
export class ChatSelectorComponent implements OnInit {
  @Output() openSearch = new EventEmitter();
  constructor(private chatService: ChatService) { }

  ngOnInit() {
  }

  setChat() {
    // this.chatService.setSelectedChat(5);
  }

  openSearchFn() {
    this.openSearch.emit();
  }
}
