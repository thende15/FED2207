import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-image-card',
  templateUrl: './image-card.component.html',
  styleUrls: ['./image-card.component.css'],
  providers: [DataService]
})
export class ImageCardComponent implements OnInit {
  imageCard!: { image: string; numbImage: string; caption: string; content: string; }[];

  constructor(private data: DataService) { }

  ngOnInit(): void {
    this.imageCard = this.data.imageCard
    
  }
  
  
}
