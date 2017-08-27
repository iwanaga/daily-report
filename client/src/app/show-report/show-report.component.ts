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
      name: 'Nicola Lawrence', email: 'foo@example.com',
      reports: [
        {
          value: 'aaa',
          tasks: [
            'bbb',
            'ccc',
            'ddd'],
          message: 'eee'
        },
        {
          value: 'aaa',
          tasks: [
            'bbb',
            'ccc',
            'ddd'],
          message: 'eee'
        },
        {
          value: '',
          tasks: [],
          message: ''
        }
      ]
    },
    {
      name: 'William Coleman', email: 'bar@example.com',
      reports: [
        {
          value: 'aaa',
          tasks: [
            'bbb',
            'ccc',
            'ddd'],
          message: 'eee'
        },
        {
          value: 'aaa',
          tasks: [
            'bbb',
            'ccc',
            'ddd'],
          message: 'eee'
        },
        {
          value: 'aaa',
          tasks: [
            'bbb',
            'ccc',
            'ddd'],
          message: 'eee'
        }
      ]
    }
  ];
  generateHref(user, report){
    return `mailto:${user.email}?subject=Re:20170825【${user.name}】&body=お疲れ様です。%0d%0a%0d%0a>%20${report.value}${report.tasks.map(text => '%0d%0a>%20・' + text)}%0d%0a>%20${report.message}`
  }
  constructor() { }

  ngOnInit() {
  }
}
