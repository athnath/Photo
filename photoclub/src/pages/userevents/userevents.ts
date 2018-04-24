import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CompetitionPage} from "../competition/competition";


/**
 * Generated class for the UsereventsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-userevents',
  templateUrl: 'userevents.html',


})
export class UsereventsPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  console.log(navParams.get('val'));
  }

 loadcompetition()
 {
   this.navCtrl.push(CompetitionPage,{
     val1:'xyz'
   })
 };




}
