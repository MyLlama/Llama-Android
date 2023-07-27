import { Component } from '@angular/core';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private iab: InAppBrowser) {
    this.OpenInAppBrowser();
  }

  OpenInAppBrowser() {
    const browser = this.iab.create('https://learn.myllama.co/', '_blank', {
      location: 'no',
      hidden: 'no',
      hardwareback: 'yes',
      toolbar: 'no'
    });

    // browser.executeScript(...);

    // browser.insertCSS(...);
    // browser.on('loadstop').subscribe(event => {
    //   browser.insertCSS({ code: "body{color: red;" });
    // });

    // browser.close();
  }
}
