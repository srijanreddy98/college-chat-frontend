import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  constructor(private chatService: ChatService) { }
  view: 'chat' | 'search' = 'chat';
  ngOnInit() {
    this.chatService.getUser();
  }

  changeView(view: 'chat' | 'search') {
    this.view = view;
  }

}
