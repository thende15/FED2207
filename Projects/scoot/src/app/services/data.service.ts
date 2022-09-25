import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  imageCard = [
    {
      image: "../../../assets/images/our-tech.jpg",
      numbImage: "https://cdn.discordapp.com/attachments/988892969782354062/1023715185145421894/unknown.png",
      caption: "Our tech",
      content: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    },
    {
      image: "../../../assets/images/our-integrity.jpg",
      numbImage: "https://cdn.discordapp.com/attachments/988892969782354062/1023715385381498910/unknown.png",
      caption: "Our integrity",
      content: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    },
    {
      image: "../../../assets/images/our-community.jpg",
      numbImage: "https://cdn.discordapp.com/attachments/988892969782354062/1023715185145421894/unknown.png",
      caption: "Our community",
      content: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    }
  ]
}
