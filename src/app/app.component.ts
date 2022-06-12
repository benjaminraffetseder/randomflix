import { Component, ViewChild } from '@angular/core';
import { IonTabs } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  @ViewChild('tabs') tabs: IonTabs;

  selectedTab = 'home';

  setCurrentTab() {
    this.selectedTab = this.tabs.getSelected();
  }
}
