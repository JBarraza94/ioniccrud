import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NavPassDataService } from '../nav-pass-data.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.page.html',
  styleUrls: ['./detail.page.scss'],
})
export class DetailPage implements OnInit {
  public person = this.dataService.getData();
  

  constructor(public navCtrl: NavController,
    public dataService: NavPassDataService) {
  }

  ngOnInit() {
    if (this.person === undefined) {
      this.navCtrl.navigateRoot("/home")
    }
  }
}
