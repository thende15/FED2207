import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.css']
})
export class AccordionComponent implements OnInit {

  constructor() { }
  items = ['Item 1', 'Item 2', 'Item 3', 'Item 4', 'Item 5'];
  accordBlockOne = [
    {
      title: "How do I download the app?",
      content: "To download the Scoot app, you can search “Scoot” in both the App and Google Play stores. An even simpler way to do it would be to click the relevant link at the bottom of this page and you’ll be re-directed to the correct page."
    },
    {
      title: "Can I find a nearby Scoots?",
      content: "This is a random block of text to signify the content of this accordion."
    },
    {
      title: "Do I need a license to ride?",
      content: "Seriously, look how sexy this look. How much time did I spend on it? Doesn't matter, I got it done, babyyyyyy."
    }
  ];
  accordBlockTwo = [
    {
      title: "Should I wear a helmet?",
      content: "Yes, please do! All cities have different laws. But we strongly strongly strongly recommend always wearing a helmet regardless of the local laws. We like you and we want you to be as safe as possible while Scooting."
    },
    {
      title: "How about the rules & regulations?",
      content: "The bigger question is, did I do good on this section? That answer is simple."
    },
    {
      title: "What if I damage my Scoot?",
      content: "Absolutely I did. And admittedly all these blurbs are not professional, but I needed some placeholder text. Don't ask why I didn't use dummy."
    },
  ]; 
  expandedIndex = 0;
  ngOnInit(): void {
  }

}
