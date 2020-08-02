import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageapiService {
  width = window.innerWidth;
  height = window.innerHeight;

  constructor(private http: HttpClient) {}

  fetchBgImage(): Observable<any> {
    return this.http.get(
      `https://loremflickr.com/json/g/${this.width}/${this.height}/nature`
    );
  }
}
