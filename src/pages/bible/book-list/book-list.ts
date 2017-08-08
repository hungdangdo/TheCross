import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ViewController} from 'ionic-angular';

/**
 * Generated class for the BookListPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-book-list',
  templateUrl: 'book-list.html',
})
export class BookListPage {

  books;
  index;

  constructor(public viewCtrl: ViewController, public navCtrl: NavController, public navParams: NavParams) {
    this.books = this.navParams.get('books');
    this.index = this.navParams.get('bookIndex');
  }

  ionViewDidLoad() {

  }

  change(data) {
    this.index = data;
    this.viewCtrl.dismiss(this.index);
  }

  close() {
    this.viewCtrl.dismiss();
  }
}