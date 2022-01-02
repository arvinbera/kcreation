import { Component } from '@angular/core';
import SessionHelper from './Core/SessionHelper';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'kcreation';
  display: boolean = true;

  public Auth:any=SessionHelper.GetSession<any>();


}
