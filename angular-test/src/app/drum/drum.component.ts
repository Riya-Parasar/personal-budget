import { Component } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-drum',
  templateUrl: './drum.component.html',
  styleUrls: ['./drum.component.sass']
})
export class DrumComponent {

  constructor(public data: DataService) {}

}
