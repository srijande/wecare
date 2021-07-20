import { Component, OnInit } from '@angular/core';

import {PageEvent} from '@angular/material/paginator';


export interface Section {
  name: string;
  updated: Date;
}
@Component({
  selector: 'app-covidsupport',
  templateUrl: './covidsupport.component.html',
  styleUrls: ['./covidsupport.component.css']
})
export class CovidsupportComponent implements OnInit {

  folders: Section[] = [
    {
      name: 'Photos',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      name: 'Work',
      updated: new Date('1/28/16'),
    }
  ];
  notes: Section[] = [
    {
      name: 'Vacation Itinerary',
      updated: new Date('2/20/16'),
    },
    {
      name: 'Kitchen Remodel',
      updated: new Date('1/18/16'),
    }
  ];



  // MatPaginator Inputs
  length = 100;
  pageSize = 10;
  pageSizeOptions: number[] = [5, 10, 25, 100];

  // MatPaginator Output
  pageEvent: PageEvent;


  constructor() { }

  ngOnInit(): void {
  }



  setPageSizeOptions(setPageSizeOptionsInput: string) {
    if (setPageSizeOptionsInput) {
      this.pageSizeOptions = setPageSizeOptionsInput.split(',').map(str => +str);
    }
  }
  
}
