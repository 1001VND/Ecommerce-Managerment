import { Component, OnInit } from '@angular/core';
import { TestService } from './service/test.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'client';

  constructor(private service: TestService){
  }
  ngOnInit(): void {
    this.service.test().subscribe( res => {
      console.log(res);
    }) 
  }
}
