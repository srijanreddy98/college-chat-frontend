import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Subject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(private http: HttpClient) { }
  selectedChat: any;
  selectedChatSubject: Subject<any> = new Subject();

  user: any;
  userSubject: Subject<any> = new Subject();
  getClientDetails() {
    return this.http.get('/api/current_user?client=true').subscribe(
      res => {
        this.user = res;
        this.userSubject.next(this.user);
      },
      err => console.log(err)
    );
  }
  getUser() {
    return this.userSubject;
  }
  searchForUser(user): Observable<any> {
    return this.http.post('/api/search_user', {searchString: user});
  }

  getSelectedChat(): Subject<any> {
    return this.selectedChatSubject;
  }

  setSelectedChat(i) {
    if (i) {
      this.selectedChat = i;
    }
    this.selectedChatSubject.next(this.selectedChat);
  }
}
