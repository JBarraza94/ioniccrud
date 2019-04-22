import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PeopleService } from '../people.service'

@Component({
  selector: 'app-new',
  templateUrl: './new.page.html',
  styleUrls: ['./new.page.scss'],
})
export class NewPage implements OnInit {
  public person = {
    name: {},
    location: {},
    picture: {
      medium: "https://proxy.harvestfiles.com/production_harvestapp_public/uploads/users/avatar/001/279/398/normal.jpg?1510261822",
      large: "https://proxy.harvestfiles.com/production_harvestapp_public/uploads/users/avatar/001/279/398/normal.jpg?1510261822",
    }
  };

  constructor(public navCtrl: NavController,
    public peopleService: PeopleService,
  ) { }

  ngOnInit() {
  }

  logForm() {
    this.peopleService.people.push(...[this.person]);
    this.navCtrl.navigateRoot("/home");
  }
}

