import { Component } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-guitar',
  templateUrl: './guitar.component.html',
  styleUrls: ['./guitar.component.sass']
})
export class GuitarComponent {

  constructor(public dataService : DataService){}

  changeName()
  {
    this.dataService.name = "Parasar";
  }

}
