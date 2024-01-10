import { Component, Input, OnInit } from '@angular/core'
import { ActivatedRoute } from '@angular/router';
import { EventResponse, Event } from 'src/app/models/event.interface';
import { EventsService } from 'src/app/services/events.service'

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit{

  events: Event[] = [];
  totalPages: number = 0;
  totalItems: number = 0;
  currentPage: number = 1;
  @Input() requestedPage: number = 1;
  
  constructor(private eventsService: EventsService,
              private route: ActivatedRoute) {
                this.route.queryParams.subscribe(params => {
                  if(typeof params['page'] == 'number'){
                    this.requestedPage = params['page'];
                  }
                });
              }

  ngOnInit(): void {
    this.getEvents(this.requestedPage);
  }

  getEvents(page:number){
    this.eventsService
      .getAllEvents(page)
      .subscribe((eventsResponse: EventResponse)=> {
        this.totalPages = eventsResponse.totalPages;
        this.totalItems = eventsResponse.totalItems;
        this.currentPage = eventsResponse.currentPage;
        this.events = eventsResponse.items;
      });
  }

  navigateToPage(page: number){
    this.requestedPage = page;
    this.getEvents(page);
  }

}
