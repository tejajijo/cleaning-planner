import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import { DashboardComponent } from '../dashboard/dashboard.component';

@Component({
  selector: 'app-sidenav-bar',
  standalone: true,
  imports: [
    MaterialModule,
    DashboardComponent
  ],
  templateUrl: './sidenav-bar.component.html',
  styleUrl: './sidenav-bar.component.scss'
})
export class SidenavBarComponent {

  isSidenavOpen = false;                     //initializes sidenav as closed

  toggleSidenav(){
    this.isSidenavOpen = !this.isSidenavOpen; // toggle the state
  }

}
