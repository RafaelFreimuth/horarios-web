import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-sorteio-dialog',
  templateUrl: './sorteio-dialog.component.html',
  styleUrls: ['./sorteio-dialog.component.css']
})
export class SorteioDialogComponent implements OnInit {

  horarios: string[];

  constructor(private dialogRef: MatDialogRef<SorteioDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string[]) { 

      this.horarios = data;
      console.log(this.horarios)
    }

  ngOnInit(): void {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}
