import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-report',
  templateUrl: './create-report.component.html',
  styleUrls: ['./create-report.component.css']
})
export class CreateReportComponent implements OnInit {
  report: Report = {
    value: '',
    tasks: ['','',''],
    message: ''
  };
  constructor() { }

  ngOnInit() {
  }

  fill() {
    this.report = {
      value: 'Axionシステムのリリースが完了し、定常稼働開始。年間10億円の価値創出見込み。',
      tasks: ['本番環境リリース完了', 'ユーザマニュアル完成', '運用手順書作成中\n・メンテナンス手順：done\n・障害対応手順：70%'],
      message: '9/1(金)は全休予定です。'
    }
  }
}
export interface Report {
  value: string;
  tasks: string[];
  message: string;
}
