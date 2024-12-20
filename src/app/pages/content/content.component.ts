import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { dataFake } from '../../data/dataFake';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css'],
})
export class ContentComponent implements OnInit {
  photoCover: string = '';
  contentTitle: string = '';
  contentDescription: string = '';

  private id: string | null = '0';
  constructor(private route: ActivatedRoute) {} //necessário para pegar os ids

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => {
      this.id = value.get('id'); //pegando o valor do id do que estão vindo de outros components
    });
    this.setValuesToComponent(this.id);
  }

  setValuesToComponent(id: string | null) {
    const result = dataFake.filter(
      (article) => article.id.toString() === id
    )[0];
    this.contentTitle = result.title;
    this.contentDescription = result.description;
    this.photoCover = result.photoCover;
  }
}
