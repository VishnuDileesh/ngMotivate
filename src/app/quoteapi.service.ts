import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class QuoteapiService {
  constructor(private http: HttpClient) {}

  fetchQuote(): Observable<any> {
    return this.http.get('https://type.fit/api/quotes');
  }
}
