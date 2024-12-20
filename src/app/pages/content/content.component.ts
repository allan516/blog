import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQagac0pNKYHOWwVIBFhzBwy-xmwpFbFrfVyQ&s';
  contentTitle: string = 'Notícias';
  contentDescription: string =
    'Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro doloruminventore omnis lab';
  constructor() {}

  ngOnInit(): void {}
}
