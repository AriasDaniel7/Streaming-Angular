import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { CurrencyPipe, NgOptimizedImage } from '@angular/common';
import { Screen } from '../../interfaces/screen.interface';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule, MatButtonModule, NgOptimizedImage, CurrencyPipe],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss',
})
export class CardComponent implements OnInit {
  @Input() screen!: Screen;

  constructor() {}

  ngOnInit(): void {}
}
