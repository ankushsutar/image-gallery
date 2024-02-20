import {
  CUSTOM_ELEMENTS_SCHEMA,
  NO_ERRORS_SCHEMA,
  NgModule,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { SearchBarComponent } from './search-bar/search-bar.component';
import { ThemeToggleComponent } from './theme-toggle/theme-toggle.component';
import { ImageGridComponent } from './image-grid/image-grid.component';
import { ImageCardComponent } from './image-card/image-card.component';
import { GalleryComponent } from './gallery/gallery.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchBarComponent,
    ThemeToggleComponent,
    ImageGridComponent,
    ImageCardComponent,
    GalleryComponent,
  ],
  imports: [BrowserModule, CommonModule, HttpClientModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA, CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
