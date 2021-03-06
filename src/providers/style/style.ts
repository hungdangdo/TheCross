import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

/*
  Generated class for the StyleProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class StyleProvider {

  headerBackground: string = 'hdGreen';
  tabsBackground: string = 'hdGreen';
  bibleDarkThemeToggle:boolean = false;

  constructor(public storage: Storage) {
    this.storage.get('style').then((data) => {
      if (data !== null) {
        this.headerBackground = data.headerBackground;
        this.tabsBackground = data.tabsBackground;
        this.bibleDarkThemeToggle = data.bibleDarkThemeToggle;
      }
    });
  }


  saveStyle() {
    let data = {
      headerBackground: this.headerBackground,
      tabsBackground: this.tabsBackground,
      bibleDarkThemeToggle: this.bibleDarkThemeToggle
    };
    this.storage.set('style', data);
  }

}
