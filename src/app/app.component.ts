import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  dropdown: HTMLElement | null | undefined;

  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    
    // to find the dropdown element with the CSS class "dropdown" within the component's template. 

    this.dropdown = this.elementRef.nativeElement.querySelector('.dropdown'); 

    if (this.dropdown) {
      this.dropdown.addEventListener('click', () => {
        this.dropdown?.classList.toggle('active');
      });
    }
  }
}
