import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private apiUrl = 'http://localhost:5000';  // URL of your Langchain backend

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<string[]> {
    return this.http.get<string[]>(`${this.apiUrl}/characters`);
  }

  createCharacter(character: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/characters`, character);
  }
}
