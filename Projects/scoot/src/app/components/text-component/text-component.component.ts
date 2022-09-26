import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-text-component',
  templateUrl: './text-component.component.html',
  styleUrls: ['./text-component.component.css'],
  providers: [DataService]
})
export class TextComponentComponent implements OnInit {
  textCard!: { image: string; title: string; content: string; }[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.textCard = this.data.textCard
  }

}
