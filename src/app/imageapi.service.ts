import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

import { environment } from 'src/environments/environment.prod';

@Injectable({
  providedIn: 'root',
})
export class ImageapiService {
  private APIKEY = environment.imageAPIKey;
  private BASEURL = 'https://api.pexels.com/v1/search?query=nature';

  httpOptions = {
    headers: new HttpHeaders({
      Authorization: this.APIKEY,
    }),
  };

  constructor(private http: HttpClient) {}

  fetchBgImage(): Observable<any> {
    return this.http.get(`${this.BASEURL}`, this.httpOptions);
  }
}
