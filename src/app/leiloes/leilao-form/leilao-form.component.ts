import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

import { Leilao } from '../shared/leilao';
import { LeiloesService } from '../shared/leiloes.service';

@Component({
  selector: 'app-leilao-form',
  templateUrl: './leilao-form.component.html',
  styleUrls: ['./leilao-form.component.css']
})
export class LeilaoFormComponent implements OnInit {

  form: FormGroup;
  title: string;
  leilao: Leilao = new Leilao();

  constructor(
    formBuilder: FormBuilder,
    private router: Router,
    private route: ActivatedRoute,
    private leiloesService: LeiloesService
  ) {

    this.form = new FormGroup({
      ID: new FormControl({value: '0'}),
      Nome: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Responsavel: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Novo:         new FormControl({ value: '' }, Validators.compose([Validators.required])),
      ValorInicial: new FormControl({ value: '' }, Validators.compose([Validators.required])),
      ValorFinal:   new FormControl({ value: '' }, Validators.compose([Validators.required])),
      Finalizado:   new FormControl({ value: '' }, Validators.compose([Validators.required])),
    });
  }

  ngOnInit() {
    var id = this.route.params.subscribe(params => {
      var id = params['id'];

      this.title = id ? 'Editar Leilao' : 'Novo Leilao';
      
      console.log("ANTES - O ID é: " + id);
      if (!id){
        this.form.patchValue({
          ID: 0,
          Nome: '',
          Responsavel:'',
          Novo: '',
          ValorInicial: '',
          ValorFinal: '',
          Finalizado: ''
        });
      }else{
        this.leiloesService.getLeilao(id)
        .subscribe(
          leilao => {
            console.log(leilao[0]);
            this.leilao = leilao[0];
            
            this.form.patchValue({
              ID: leilao[0]._id,
              Nome: leilao[0].Nome,
              Responsavel: leilao[0].Responsavel,
              Novo: leilao[0].Novo,
              ValorInicial: leilao[0].ValorInicial,
              ValorFinal: leilao[0].ValorFinal, 
              Finalizado: leilao[0].Finalizado
           });
          }
        );
      }
      
    });
  }

  save() {
    var result,
        formValue = this.form.value;

    console.log("Submetendo Formulario: " + formValue.ID);
    console.log(JSON.stringify(formValue));
    
    
    if (formValue.ID){
      result = this.leiloesService.updateLeilao(formValue);
    } else {
      result = this.leiloesService.addLeilao(formValue);
    }

    result.subscribe(data => this.router.navigate(['leilao']));
    
  }
}
