import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  cards=[
    {
      id:1,
      name: "Item 1",
      desc: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      img:"assets/img/shiba2.jpg"
    },
    {
      id:2,
      name: "Item 2",
      desc: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      img:"assets/img/shiba2.jpg"
    },
    {
      id:3,
      name: "Item 3",
      desc: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      img:"assets/img/shiba2.jpg"
    },
    {
      id:4,
      name: "Item 4",
      desc: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      img:"assets/img/shiba2.jpg"
    },
    {
      id:5,
      name: "Item 5",
      desc: "The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was originally bred for hunting.",
      img:"assets/img/shiba2.jpg"
    },
  ]
}
