import {Component} from '@angular/core'
import {HomePage} from '../home-page/home-page';
import {DebugPage} from '../debug/debug';


@Component({
  templateUrl: 'build/pages/tabs/tabs.html'
})
export class TabsPage {
  constructor() {
    // this tells the tabs component which Pages
    // should be each tab's root Page
    this.tab1Root = HomePage;
    this.tab2Root = DebugPage;
  }
}
