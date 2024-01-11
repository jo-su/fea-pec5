import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Event, EventsResponse } from '../models/event.interface';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  getAllEvents(page: number = 1, elements: number = 10): Observable<EventsResponse> {
    return this.http.get<EventsResponse>('https://api.euskadi.eus/culture/events/v1.0/events?_page='+page+'&_elements='+elements);
  }

  getEventById(id: String): Observable<Event> {
    return this.http.get<Event>('https://api.euskadi.eus/culture/events/v1.0/events/'+id);
  }
}
