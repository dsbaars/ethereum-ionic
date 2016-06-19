import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Web3Service }        from '../../providers/web-3-service/web-3-service.js';

@Component({
  templateUrl: 'build/pages/home-page/home-page.html',
  providers: [Web3Service],
})
export class HomePage {
  static get parameters() {
    return [[NavController], [Web3Service]];
  }

  constructor(_navController, _web3) {
    this._navController = _navController;
    this.web3 = _web3.get();
  }
}
