import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import { Web3Service }        from '../../providers/web-3-service/web-3-service.js';
import _ from 'lodash';

/*
  Generated class for the DebugPage page.
*/
@Component({
  templateUrl: 'build/pages/debug/debug.html',
  providers: [Web3Service]
})
export class DebugPage {
  static get parameters() {
    return [[NavController], [Web3Service]];
  }

  constructor(_nav, _web3) {
    this.nav = _nav;
    this.web3 = _web3.get();

    this.showValues = [
      'version.network',
      'version.ethereum',
      'version.node',
      'version.whisper',
      'isConnected',
      'net.listening',
      'net.peerCount',
      'eth.syncing',
      'eth.coinbase',
      'eth.gasPrice',
    ];
  }
  getValue(v) {
    try {
      let ret = _.get(this.web3, v);
      if (_.isFunction(ret)) {
        ret = _.invoke(this.web3, v);
      }

      return ret;
    }
    catch (e) {
      return e;
    }
  }
}
