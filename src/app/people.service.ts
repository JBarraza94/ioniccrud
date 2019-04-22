import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { map } from 'rxjs/operators';

@Injectable()
export class PeopleService {
  public people = [];
  public peopleFilter = [];

  constructor(public http: Http) {
  }

  getPeople(toReturn) {
    if (toReturn === undefined) {
      return this.http.get('https://randomuser.me/api/?results=10')
        .pipe(
          map(res => res.json())
        )
    } else {
      return this.http.get('https://randomuser.me/api/?results=' + toReturn)
        .pipe(
          map(res => res.json())
        )
    }
  }
}
