import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.css'],
  providers: [DataService]
})
export class JobsComponent implements OnInit {
  jobs!: { position: string; location: string; }[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.jobs = this.data.jobs
  }

}
