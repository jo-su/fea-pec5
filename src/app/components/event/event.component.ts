import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/event.interface';
import { EventsService } from 'src/app/services/events.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css'],
})
export class EventComponent implements OnInit {

  event!: Event;
  panelOpenState: boolean = false;
  loading: boolean = true;

  constructor(
    private eventsService: EventsService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}
  
  ngOnInit(): void {
    const id: any = this.activatedRoute.snapshot.paramMap.get('id');
    this.eventsService.getEventById(id).subscribe((event)=> {

      if(!event){
        this.router.navigateByUrl('/');
      };
      console.log(event);
      this.event = event;
      this.loading = false;

    });
  }

}
