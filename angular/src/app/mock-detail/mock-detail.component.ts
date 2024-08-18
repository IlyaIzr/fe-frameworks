import { Component, Input } from '@angular/core';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-mock-detail',
  standalone: true,
  templateUrl: './mock-detail.component.html',
  styleUrls: ['./mock-detail.component.css'],
  imports: [NgIf],
})
export class MockDetailComponent {
  @Input() index!: number;
  isVisible = true;
  clicked = 0;
  randomString = Math.random().toString(36).substring(2, 7);
  title = `${this.randomString}. Index: ${this.index}. Clicked ${this.clicked}`;
  tagName = Math.random() > 0.5 ? 'div' : 'span';
  backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  renderChild = Math.random() < 0.2;

  onSingleClick() {
    this.clicked++;
    this.title = `${this.randomString}. Index: ${this.index}. Clicked ${this.clicked}`;
  }

  onDoubleClick() {
    this.isVisible = false;
  }
}
