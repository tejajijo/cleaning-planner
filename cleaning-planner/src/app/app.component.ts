import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaterialModule } from './material/material.module';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            RouterOutlet, 
            DashboardComponent,
            MaterialModule
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'cleaning-planner';
}
