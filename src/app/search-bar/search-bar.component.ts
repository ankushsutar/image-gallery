import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.scss'],
})
export class SearchBarComponent {
  searchQuery: string = '';
  @Output() search: EventEmitter<string> = new EventEmitter<string>();

  performSearch(): void {
    this.search.emit(this.searchQuery);
  }
}
