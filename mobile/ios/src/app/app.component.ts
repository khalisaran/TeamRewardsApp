import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SharedService } from '../shared/shared.service';
import { HomePage, Nomination_Creation_ScreenPage, Screen_76100Page, Screen_76150Page } from '../pages/pages';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;
  activities: Array<{title: string, showSubMenu: boolean, pages: Array<{title: string, component: any}>}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen,
          private shared_service: SharedService) {
    this.initializeApp();
    this.activities = [
      {
        title: 'Nomination_Default_Activity',
        showSubMenu : false,
        pages: [
          {
            title: 'Nomination_Creation_Screen',
            component: Nomination_Creation_ScreenPage
          }
        ]
      },
      {
        title: 'Nominee_Default_Activity',
        showSubMenu : false,
        pages: [
          {
            title: 'Screen_76100',
            component: Screen_76100Page
          }
        ]
      },
      {
        title: 'Leader_reviewer_Default_Activity',
        showSubMenu : false,
        pages: [
          {
            title: 'Screen_76150',
            component: Screen_76150Page
          }
        ]
      }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      //this.splashScreen.hide();
    });
  }

  openSubmenu(act){
    act.showSubMenu = !act.showSubMenu;
  }

  openPage(page) {
    this.nav.push(page.component);
  }


}
