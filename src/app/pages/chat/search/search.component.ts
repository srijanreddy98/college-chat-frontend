import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ChatService } from 'src/app/services/chat.service';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  @Output() changeView = new EventEmitter();
  constructor(private chatService: ChatService) { }
  users = [];
  search = new Subject();
  ngOnInit() {
    this.search.pipe(debounceTime(200)).subscribe(
      userStr => {
        if (userStr === '') {
          this.users = [];
          return;
        }
        this.chatService.searchForUser(userStr).subscribe(
          res => this.users = res,
          err => console.log(err)
        );
      }
    );
  }
  searchInput(e) {
    this.search.next(e);
  }

  userSelected(user) {
    this.chatService.setSelectedChat(user);
    this.changeView.emit();
  }
}
