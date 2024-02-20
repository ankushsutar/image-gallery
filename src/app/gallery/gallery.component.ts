import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ImageService } from '../image.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  @Input() isDarkMode: boolean = false;
  @Output() themeChange = new EventEmitter<boolean>();
  searchedString: string = 'home';
  images: any[] = [];
  isLoading: boolean = false;

  constructor(private imageService: ImageService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.searchImages();
  }

  toggleTheme() {}

  handleSearch(searchString: string): void {
    this.searchedString = searchString;
    // Do whatever you want with the searched string
    this.searchImages();
  }

  searchImages(): void {
    if (!this.searchedString.trim()) return;
    this.isLoading = true;
    this.imageService.searchImages(this.searchedString).subscribe(
      (response) => {
        this.images = response.results;
        this.isLoading = true;
      },
      (error) => {
        console.error('Error fetching images:', error);
        this.isLoading = false;
      }
    );
  }
}
