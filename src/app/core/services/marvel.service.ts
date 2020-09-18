import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

import {IResponse} from '../interface/IResponse';
import {Marvel} from '../models/Marvel';
@Injectable({
  providedIn: 'root'
})
export class MarvelService {

  constructor(
    private http: HttpClient
  ) { }

  getMarvel(offset) {
    return this.http.get<IResponse<Marvel[]>>(`https://gateway.marvel.com/v1/public/characters?ts=1565922410&apikey=6a038473ffd6407750a2ea27115f7e7c&hash=1492df65a88ef98a1a279719fe509f72&offset=${offset*3}&limit=3`).pipe(
      map(_res => _res.data),
      catchError(error => throwError(error))
    );
  }
}
