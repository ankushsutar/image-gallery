import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-theme-toggle',
  templateUrl: './theme-toggle.component.html',
  styleUrls: ['./theme-toggle.component.scss'],
})
export class ThemeToggleComponent {
  @Input() themeToggle: boolean = false;
  @Output() themeChange = new EventEmitter<boolean>();
}
