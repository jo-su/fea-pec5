import { Component, Input, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { EventsResponse, Event } from 'src/app/models/event.interface';
import { EventsService } from 'src/app/services/events.service'

import { bounceInOnEnterAnimation, fadeInUpOnEnterAnimation } from 'angular-animations';



@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css'],
  animations: [fadeInUpOnEnterAnimation(),
    bounceInOnEnterAnimation()],
})
export class EventsComponent implements OnInit{

  events: Event[] = [];
  totalPages: number = 0;
  totalItems: number = 0;
  currentPage: number = 1;
  loading: boolean = true;

  displayedColumns: string[] = ['nameEs', 'typeEs', 'municipalityEs', 'establishmentEs', 'startDate'];
  
  constructor(private eventsService: EventsService) {}

  ngOnInit(): void {
    this.getEvents(this.currentPage);
  }

  getEvents(page:number){
    this.loading = true;
    this.eventsService
      .getAllEvents(page)
      .subscribe((eventsResponse: EventsResponse)=> {
        this.totalPages = eventsResponse.totalPages;
        this.totalItems = eventsResponse.totalItems;
        this.currentPage = eventsResponse.currentPage;
        this.events = eventsResponse.items;
        this.loading = false;
      });
  }

  navigateToPage(page: number){
    if(page > 0 && page <= this.totalPages){
      this.getEvents(page);
    }
  }

}
