import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-show-report',
  templateUrl: './show-report.component.html',
  styleUrls: ['./show-report.component.css']
})
export class ShowReportComponent implements OnInit {
  labels = ['Name', '8/25(金)', '8/24(木)', '8/23(水)'];
  reportData = [
    {
      name: 'Adam Howard',
      reports: [
        {
          value: 'aaa',
          tasks: 'bbb',
          message: 'ccc'
        },
        {
          value: 'ddd',
          tasks: 'eee',
          message: 'fff'
        },
        {
          value: 'ggg',
          tasks: 'hhh',
          message: 'iii'
        }
      ]
    },
    {
      name: 'Eric Roberts',
      reports: [
        {
          value: 'aaa',
          tasks: 'bbb',
          message: 'ccc'
        },
        {
          value: 'ddd',
          tasks: 'eee',
          message: 'fff'
        },
        {
          value: 'ggg',
          tasks: 'hhh',
          message: 'iii'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}

