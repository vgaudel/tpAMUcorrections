import { Component, signal } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-em01-boutons',
  imports: [MatButtonModule],
  templateUrl: './em01-boutons.html',
  styleUrl: './em01-boutons.scss',
})
export class Em01Boutons {
  clics = signal(0);

  incrementer() {
    this.clics.update(v => v + 1);
  }
}
