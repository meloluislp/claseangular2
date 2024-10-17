import { Component, Input } from '@angular/core';
import { Gif } from '../../interfaces/gifs.interfaces';
import { NgFor } from '@angular/common';

@Component({
  selector: 'gifs-card-list',
  templateUrl: './card-list.component.html',
  imports: [NgFor],
  standalone: true
})
export class CardListComponent {

  @Input()
  public gifs: Gif[] = [];

}
