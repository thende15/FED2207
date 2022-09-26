import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor() { }

  imageCard = [
    {
      image: '../../../assets/images/our-tech.jpg',
      numbImage: 'https://cdn.discordapp.com/attachments/988892969782354062/1023715491816157224/unknown.png',
      caption: "Our tech",
      content: "We’re using cutting edge technology to drive accessible urban transportation forward. Our fully electric scooters are a joy to ride!",
    },
    {
      image: '../../../assets/images/our-integrity.jpg',
      numbImage: 'https://cdn.discordapp.com/attachments/988892969782354062/1023715385381498910/unknown.png',
      caption: "Our integrity",
      content: "We are fully committed to deliver a great yet safe, sustainable micro-mobility experience in every city we serve.",
    },
    {
      image: '../../../assets/images/our-community.jpg',
      numbImage: 'https://cdn.discordapp.com/attachments/988892969782354062/1023715185145421894/unknown.png',
      caption: "Our community",
      content: "We support every community we serve. All workers are paid a living wage based on their location and are Scoot employees.",
    }
  ]
  textCard = [
    {
      image: "../../../assets/icons/locate.svg",
      title: "Locate with app",
      content: "Use the app to find the nearest scooter to you. We are continuously placing scooters in the areas with most demand, so one should never be too far away. "
    },
    {
      image: "../../../assets/icons/scooter.svg",
      title: "Pick your scooter",
      content: "We show the most important info for the scooters closest to you. So you know how much charge they have left and can see roughly how much it will cost."
    },
    {
      image: "../../../assets/icons/ride.svg",
      title: "Enjoy the ride",
      content: "Scan the QR code and the bike will unlock. Retract the cable lock, put on a helmet, and you’re off! Always lock bikes away from walkways and accessibility ramps."
    }
  ]
  jobs = [
    {
      position: "General Manager",
      location: "Jakarta, Indonesia"
    },
    {
      position: "UI/UX Designer",
      location: "Yokohama, Japan"
    },
    {
      position: "Blog Content Copywriter",
      location: "New York, United States"
    },
    {
      position: "Graphic Designer",
      location: "New York, United States"
    },
    {
      position: "Fleet Supervisor",
      location: "Jakarta, Indonesia"
    },
    {
      position: "UX Analyst",
      location: "London, United Kingdom"
    }
  ]
}
