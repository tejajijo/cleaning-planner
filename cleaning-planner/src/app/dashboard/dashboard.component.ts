import { Component } from '@angular/core';
import { MaterialModule } from '../material/material.module';
import {BreakpointObserver, Breakpoints} from '@angular/cdk/layout'
@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    MaterialModule
  ],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})


export class DashboardComponent {

  
}
