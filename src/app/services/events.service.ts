import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Event, EventResponse } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAllEvents(page?: number): Observable<EventResponse> {
    if (typeof page == 'undefined') {
      page = 1;
    }
    return this.http.get<EventResponse>('https://api.euskadi.eus/culture/events/v1.0/events?_page='+page);
  }

  getEventById(id: String): Observable<Event> {
    return this.http.get<Event>('https://api.euskadi.eus/culture/events/v1.0/events/'+id);
  }
}
