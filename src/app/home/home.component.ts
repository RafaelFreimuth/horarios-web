import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { SorteadorService } from '../services/sorteador.service';
import { SorteioDialogComponent } from './sorteio-dialog/sorteio-dialog.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public horarios: string[] = [];
  dadosForm: FormGroup;

  constructor(private servive: SorteadorService,
              private formBuilder: FormBuilder,
              private dialog: MatDialog) { }

  ngOnInit(): void {
  
    this.dadosForm = this.formBuilder.group({
      qtdDeHorarios: ['', [Validators.required]],
      qtdSorteios: ['', [Validators.required]]
    });
  }

  sortear(): void {
    this.servive.getSorteio(this.dadosForm.value).subscribe(response => {
      this.horarios = response.data;
      this.openDialog();
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(SorteioDialogComponent, {
      width: '350px',
      data: this.horarios
    });
    
    dialogRef.afterOpened().subscribe(() => {
      this.limparDados();
    })
  }

  private limparDados(): void {
    this.dadosForm.get('qtdDeHorarios')?.setValue({})
     this.dadosForm.get('qtdSorteios')?.setValue({})
  }

}
