import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgFor],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  cardsList = ["card1", "card2", "card3", "card4", "card5", "card6"];

  onFocus(event: FocusEvent) {
    console.log(event)
  }
}
