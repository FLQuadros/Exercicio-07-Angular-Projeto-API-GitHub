import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserRepos } from '../models/ghRepos';
import { GhUser } from '../models/ghUsers';

@Injectable()
export class GhApiService {

  private readonly baseUrl: string = 'https://api.github.com/users'

  constructor(private http: HttpClient) { }

  findUser(username: string): Observable<GhUser> {
    return this.http.get<GhUser>(`${this.baseUrl}/${username}`)
  }

  findRepos(username: string): Observable<UserRepos[]> {
    return this.http.get<UserRepos[]>(`${this.baseUrl}/${username}/repos`)
  }
}
