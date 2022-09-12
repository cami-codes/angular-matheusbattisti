import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  show = false

  constructor() { }

  ngOnInit(): void {
  }

  showMessage() {
    // this.show = true
    this.show = !this.show // toggle = faz o inverso
  }

}
