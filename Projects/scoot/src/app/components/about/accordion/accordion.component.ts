import { Component, OnInit } from '@angular/core';
import { CdkAccordionModule } from '@angular/cdk/accordion'

@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  expandedIndex = 0;
  ngOnInit(): void {
  }

}
