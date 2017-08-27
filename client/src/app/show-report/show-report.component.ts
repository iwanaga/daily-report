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
          tasks: ['1. foo', '2. bar', '3. baz'],
          message: 'ccc'
        },
        {
          value: 'ddd',
          tasks: ['1. foo', '2. bar', '3. baz'],
          message: 'fff'
        },
        {
          value: 'ggg',
          tasks: ['1. foo', '2. bar', '3. baz'],
          message: 'iii'
        }
      ]
    },
    {
      name: 'Eric Roberts',
      reports: [
        {
          value: 'aaa',
          tasks: ['1. foo', '2. bar', '3. baz'],
          message: 'ccc'
        },
        {
          value: 'ddd',
          tasks: ['1. foo', '2. bar', '3. baz'],
          message: 'fff'
        },
        {
          value: 'ggg',
          tasks: ['1. foo', '2. bar', '3. baz'],
          message: 'iii'
        }
      ]
    }
  ];
  constructor() { }

  ngOnInit() {
  }
}

