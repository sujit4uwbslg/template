import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // Uncomment or comment if you want external template or not
  templateUrl: './app.component.html',
  // Uncomment or comment if you want inline template or not
  //template:`<h1>This is inline template</h1>`,
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'template';
}
