import { Component } from '@angular/core';
import { GifsService } from '../../../gifs/services/gifs.service';
import { NgFor, TitleCasePipe } from '@angular/common';

@Component({
  selector: 'shared-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
  standalone: true,
  imports: [NgFor, TitleCasePipe],
  providers: [GifsService]
})
export class SidebarComponent {

  // private gifsService
  constructor( private gifsService: GifsService  ) {}

  get tags(): string[] {
    return this.gifsService.tagsHistory;
  }

  searchTag( tag: string ):void {
    this.gifsService.searchTag( tag );
  }

}
