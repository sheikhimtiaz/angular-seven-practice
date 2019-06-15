import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  imtiaz: Object;
  zakir: Object;

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.getImtiaz().subscribe(data => {
        this.imtiaz = data;
        console.log(this.imtiaz);
      }
    );
  }

}
