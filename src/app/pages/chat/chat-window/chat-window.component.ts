import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrls: ['./chat-window.component.scss']
})
export class ChatWindowComponent implements OnInit {
  name = 'Srijan';
  messages = [];
  constructor(private chatService: ChatService) { }

  ngOnInit() {
    this.chatService.getSelectedChat().subscribe(
      res => {
        this.name  = res.fullName;
      },
      err => console.log(err)
    );
    this.chatService.setSelectedChat(false);
  }

}
