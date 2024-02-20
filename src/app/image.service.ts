import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ImageService {
  private apiUrl = 'https://api.unsplash.com';
  private accessKey = 'PzEYc2u0Zz_8XEles7oCIF6Xx2UF-gtFZHjcVDZPg-s'; // Replace with your actual access key

  httpClient = inject(HttpClient);

  searchImages(query: string): Observable<any> {
    const headers = new HttpHeaders({
      Authorization: `Client-ID ${this.accessKey}`,
    });
    // const params = new HttpParams().set('query', query);
    const params = new HttpParams().set('query', query).set('per_page', 40);
    return this.httpClient.get<any>(`${this.apiUrl}/search/photos`, {
      headers,
      params,
    });
  }
}
