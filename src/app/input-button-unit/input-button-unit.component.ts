import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input-button-unit',
  template: `
    <p>
      input-button-unit works!
      <br>
      {{title}} is the new title
    </p>
  `,
  styleUrls: ['./input-button-unit.component.scss']
})
export class InputButtonUnitComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title=' Hi Yasaswini new component';
}
