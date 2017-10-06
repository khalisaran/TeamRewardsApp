import { Component } from '@angular/core';
import { NavController, LoadingController,NavParams,AlertController } from 'ionic-angular';
import { Leader_reviewer_Default_ActivityService } from '../../shared/shared';
@Component({
    templateUrl: 'screen_76150.page.html'
})
export class Screen_76150Page{
    array_Leader_reviewer: any[];

    constructor(private nav: NavController,public navParams: NavParams, private loadingController : LoadingController, public alertCtrl: AlertController, private leader_reviewer_default_activityservice: Leader_reviewer_Default_ActivityService) { }

    ionViewDidLoad() {
    }

    get_all_Leader_reviewer() {
        let loader = this.loadingController.create({
          content: 'Getting data...'
        });
        loader.present().then(() => {
          this.leader_reviewer_default_activityservice.get_all_Leader_reviewer().subscribe(data => {
            console.log('data', data);
            this.array_Leader_reviewer = data;
            loader.dismiss();
          },
          err => {
            console.log('error', err);
            loader.dismiss();
          });
        });
    }


}