import { Component } from '@angular/core';
import {FlashMessageModule} from 'angular-flash-message';

// decorador
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app works!';
}
