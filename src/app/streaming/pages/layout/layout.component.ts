import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MenuComponent } from '../../components/menu/menu.component';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from '../../components/toolbar/toolbar.component';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [ToolbarComponent, MenuComponent, MatSidenavModule, RouterOutlet],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.scss',
})
export class LayoutComponent {}
