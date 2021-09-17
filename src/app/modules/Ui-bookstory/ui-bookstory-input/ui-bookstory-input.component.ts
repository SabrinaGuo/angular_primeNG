import { Component, OnInit } from '@angular/core';
import { City } from '../../../utility/interfaces/ui-select-city';

@Component({
  selector: 'app-ui-bookstory-input',
  templateUrl: './ui-bookstory-input.component.html',
  styleUrls: ['./ui-bookstory-input.component.scss'],
})
export class UiBookstoryInputComponent implements OnInit {
  countries: City[];

  selectedCountry: string;
  field2 = '';
  constructor() {
    this.countries = [
      { name: 'Watch List' },
      { name: 'Case History' },
      { name: 'Mail to Dealer' },
    ];
  }

  ngOnInit(): void {}
}
