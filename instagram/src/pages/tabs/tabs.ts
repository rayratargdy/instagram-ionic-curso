import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { ContactPage } from '../contact/contact';
import { HomePage } from '../home/home';
import { IntroPage } from '../intro/intro';
import { ProfilePage } from '../profile/profile';
import { ReelsPage } from '../reels/reels';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = AboutPage;
  tab3Root = ReelsPage; 
  tab4Root = ContactPage;
  tab5Root = ProfilePage;
  tab6Root = IntroPage;

  constructor() {

  }
}
