import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MockDetailComponent } from './mock-detail/mock-detail.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, MockDetailComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  detailsAmount = 0;
  lastUpdateTime: string | null = null;
  userString = '';
  private intervalRef: any;

  handleChange(event: Event) {
    const input = event.target as HTMLInputElement;
    this.detailsAmount = parseInt(input.value, 10) || 0;
  }

  onStringInput(event: Event) {
    const input = event.target as HTMLInputElement;
    this.userString = input.value;
  }

  startIncrement() {
    this.intervalRef = setInterval(() => {
      this.detailsAmount++;
    }, 1000);
  }

  stopIncrement() {
    clearInterval(this.intervalRef);
  }
}
