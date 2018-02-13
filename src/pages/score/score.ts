import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

/**
 * Generated class for the ScorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-score',
  templateUrl: 'score.html',
})

export class ScorePage {
  protected createSuccess = false;
  public register = (localStorage.getItem('register')!==null)?JSON.parse(localStorage.getItem('register')):[];
  public data = {
    score_left: 0,
    score_right: 0
  }
  constructor(public navCtrl: NavController, private alertCtrl: AlertController) {
    
  }

  do_plus(pos){
    if(pos=="left"){
      let score = (this.data.score_left*1) + 1;
      this.data.score_left = score;
    } else{
      let score = (this.data.score_right*1) + 1;
      this.data.score_right = score;
    }

    return false;
  }

  do_minus(pos){
    if(pos=="left"){
      let score = (this.data.score_left*1);
      this.data.score_left = (score>0)?score - 1:0;
    } else{
      let score = (this.data.score_right*1);
      this.data.score_right = (score>0)?score - 1:0;
    }

    return false;
  }

  do_cancel(pos){
    if(pos=="left"){
      this.data.score_left = 0;
    } else{
      this.data.score_right = 0;
    }

    return false;
  }

  showPopup(title, text) {
    let alert = this.alertCtrl.create({
      title: title,
      subTitle: text,
      buttons: [
        {
          text: 'OK',
          handler: data => {
            if (this.createSuccess) {
              this.navCtrl.popToRoot();
            }
          }
        }
      ]
    });
    alert.present();
  }
}
