import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-textarea',
  templateUrl: './textarea.component.html',
  styleUrls: ['./textarea.component.css']
})
export class TextareaComponent implements OnInit {
  text: string = '';
  max: number = 100;
  charactercount: number = 0;

  updateCharacterCount() {
    this.charactercount = this.text.length;
  }
  constructor() { }

  ngOnInit(): void {
  }

  
}

