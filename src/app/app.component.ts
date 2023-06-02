import { Component } from '@angular/core'
import { TranslateService } from '@ngx-translate/core'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'angular-ngrx-skeleton'

  constructor(private traslate: TranslateService) {
    traslate.addLangs(['es', 'en'])
    traslate.setDefaultLang('es')
  }
}
