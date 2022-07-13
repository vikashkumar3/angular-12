import { Component, OnInit } from '@angular/core';
import { LocalDatePipe } from 'src/app/helpers/local-date.pipe';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [LocalDatePipe]
})
export class HomeComponent implements OnInit {

  today = new Date();
  tstr = '';

  constructor(private session:SessionService,
    private localDate:LocalDatePipe) { }

  ngOnInit() {
    this.tstr = this.localDate.transform(this.today, '');
  }


  norway() {
    this.session.registerCulture('nb-NO');
    this.refreshValues();
  }

  sweden() {
    this.session.registerCulture('sv-SE');
    this.refreshValues();
  }

  private refreshValues() {
    this.today = new Date();
  }

  updateDate(event:any){
    console.log(event.target.value);
    this.session.registerCulture(event.target.value);
    this.session.locale = event.target.value;
    this.tstr = this.localDate.transform(this.today, '');
  }
}
