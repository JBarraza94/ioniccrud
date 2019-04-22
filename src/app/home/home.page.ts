import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';
import { PeopleService } from '../people.service'
import { NavPassDataService } from '../nav-pass-data.service'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public date: number;
  public searchTerm = "";
  public shouldReorder = true;
  public toReturn = 5;

  constructor(
    public navCtrl: NavController,
    public service: PeopleService,
    public dataService: NavPassDataService
  ) {
    this.service.getPeople(undefined)
      .subscribe(
        data => {
          this.service.people = data.results;
          this.service.peopleFilter = this.service.people;
        }
      );
    this.date = Date.now();
  }

  ngOnInit() {
    this.comeFromHome();
  }

  comeFromHome() {
    var person = this.dataService.getData();
    if (person !== undefined) {
      this.service.people.push(...person);
      this.filterItems(this.searchTerm);
      this.shouldReorder = true;
    }
  }
  doRefresh(e) {
    this.service.getPeople(this.toReturn)
      .subscribe(
        data => {
          this.service.people.unshift(...data.results);
          this.filterItems(this.searchTerm);
          this.shouldReorder = true;
        },
        err => console.log(err),
        () => e.target.complete()
      )
  }

  doInfinite(e) {
    this.service.getPeople(this.toReturn)
      .subscribe(
        data => {
          this.service.people.push(...data.results);
          this.filterItems(this.searchTerm);
          this.shouldReorder = true;
        },
        err => console.log(err),
        () => e.target.complete()
      )
  }

  toggleReorder() {
    this.shouldReorder = !this.shouldReorder;
  }

  reorderItems(e) {
    let itemToMove = this.service.peopleFilter.splice(e.detail.from, 1)[0];
    this.service.peopleFilter.splice(e.detail.to, 0, itemToMove);
    e.detail.complete();
  }

  pushDetail(user: any) {
    this.dataService.setData(user);
    this.pushPage("/detail");
  }

  pushPage(goTo) {
    this.navCtrl.navigateForward(goTo);
  }

  deleteItem(person) {
    var index = this.service.peopleFilter.indexOf(person);
    this.service.peopleFilter.splice(index, 1);
  }

  filterItems(search: string) {
    this.searchTerm = search;
    this.service.peopleFilter = this.service.people.filter(item =>
      (item.name.title + " " + item.name.first + " " + item.name.last).toLowerCase().indexOf(search.toLowerCase()) > -1)
  }

}
