import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class ChatService {

  private baseURL = 'https://api.dialogflow.com/v1/query?v=20150910';
  private token = '63db21b6d636493ebd96662f21c3206d';

  constructor(private http: Http) {}

  public getResponse(query: string) {
    const data = {
      query : query,
      lang: 'en',
      sessionId: '1234567'
    };
    const headers = new Headers();
    headers.append('Authorization', `Bearer ${this.token}`);

    return this.http
      .post(`${this.baseURL}`, data, {headers: headers})
      .map(res => {
        return res.json();
      });
  }

}
