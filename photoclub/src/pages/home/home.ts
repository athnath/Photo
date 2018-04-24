import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {UsereventsPage} from '../userevents/userevents';
import {ItemsPage} from "../items/items";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {



  constructor(public navCtrl: NavController) {

  }

load(){
 this.navCtrl.push(UsereventsPage);
 this.navCtrl.push(ItemsPage);
}

}

