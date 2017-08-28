import { Component, OnInit } from '@angular/core';
import {MdDialog, MdDialogRef} from "@angular/material";

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
  selectedOption: string;

  constructor(public dialog: MdDialog) { }

  ngOnInit() {
  }

  confirm() {
    let dialogRef = this.dialog.open(DialogConfirm);
    dialogRef.afterClosed().subscribe(result => {
      this.selectedOption = result;
    });
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

@Component({
  selector: 'dialog-confirm',
  template: `<div>
    <p>送信しますか？</p>
    <button md-raised-button color="primary" md-dialog-close>送信する</button> <button md-raised-button md-dialog-close>キャンセル</button>
  </div>`,
})
export class DialogConfirm {
  constructor(public dialogRef: MdDialogRef<DialogConfirm>) {}
}
