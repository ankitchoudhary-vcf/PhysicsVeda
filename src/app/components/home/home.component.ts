import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.typingCallback(this);
  }
  private typewriter_text: string = "Welcome To The Official Website Of PhysicsVeda.";
  typewriter_display: string = "";

  typingCallback(that:any) {
    let total_length = that.typewriter_text.length;
    let current_length = that.typewriter_display.length;
    if (current_length < total_length) {
      that.typewriter_display += that.typewriter_text[current_length];
      setTimeout(that.typingCallback, 200, that);
    } else {
      that.typewriter_display = "";
      that.typingCallback(that);
    }
  }
}
