import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the CompetitionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-competition',
  templateUrl: 'competition.html',
})
export class CompetitionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    console.log(navParams.get('val1'));
  }





}
