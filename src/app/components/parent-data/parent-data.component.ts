import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-parent-data',
  templateUrl: './parent-data.component.html',
  styleUrls: ['./parent-data.component.css']
})
export class ParentDataComponent implements OnInit {
  @Input() name = ''
  @Input() userData!: {email: string, role: string}
  @Input() userDetails!: {gender: string, age: number, eyecolor: string, orientation: string}
  constructor() { }

  ngOnInit(): void {
  }

}
