import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'model';
  private hide = false;

  zmacknuteTlacitko() {
    this.hide = true;
  }
}