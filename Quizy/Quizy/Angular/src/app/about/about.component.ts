import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  public message = "test message";
  public inputMessage = "";

  public get message2(): string {
    console.log("Triggered 2", Date.now());
    return "Second message";
  }

  public message3(): string {
    console.log("Triggered 3", Date.now());
    return "Third Message";
  }
  constructor() { }

  ngOnInit(): void {
  }

}
