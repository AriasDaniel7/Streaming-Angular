import { Component, OnInit } from '@angular/core';
import { CardComponent } from '../../components/card/card.component';
import { Screen } from '../../interfaces/screen.interface';
import { ScreenService } from '../../services/screen.service';

@Component({
  selector: 'app-pantallas',
  standalone: true,
  imports: [CardComponent],
  templateUrl: './pantallas.component.html',
  styleUrl: './pantallas.component.scss',
})
export class PantallasComponent implements OnInit {
  public screens: Screen[] = [];

  constructor(private screenService: ScreenService) {}

  ngOnInit(): void {
    this.screens = this.screenService.obtenerTodos();
  }
}
