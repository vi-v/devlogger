import { Component } from '@angular/core';
import { FeathersService } from './services/feathers.service';

@Component({
  selector: 'my-app',
  moduleId: module.id,
  templateUrl: 'app.component.html',
  providers: [ FeathersService ]
})
export class AppComponent  { name = 'Snack'; }
