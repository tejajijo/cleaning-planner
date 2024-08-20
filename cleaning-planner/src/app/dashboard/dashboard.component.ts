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

  isHandset: boolean = false;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.breakpointObserver.observe([Breakpoints.Handset]).subscribe(result => {
      this.isHandset = result.matches;
    });
  }
  
}
