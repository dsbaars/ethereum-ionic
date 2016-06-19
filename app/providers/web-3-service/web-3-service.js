import {Injectable, NgZone, LifeCycle} from '@angular/core';
import { Platform, Events } from 'ionic-angular';
import 'rxjs/add/operator/map';
import Web3 from 'web3';

@Injectable()
export class Web3Service {
  constructor() {
    if (typeof web3 !== 'undefined') {
      this.web3 = new Web3(web3.currentProvider);
    } else {
      this.web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:8545"));
    }
  }

  get() {
    return this.web3;
  }
}
