import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MaterialModule } from './material/material.module';
import { SidenavBarComponent } from './sidenav-bar/sidenav-bar.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
            RouterOutlet, 
            DashboardComponent,
            MaterialModule,
            SidenavBarComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})


export class AppComponent {
  title = 'cleaning-planner';
}
