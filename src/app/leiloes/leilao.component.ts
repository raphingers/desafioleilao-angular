import { Component, OnInit } from '@angular/core';
import {LeiloesService} from "./shared/leiloes.service";
import {Leilao} from "./shared/leilao";

@Component({
  selector: 'app-leiloes',
  templateUrl: './leilao.component.html',
  styleUrls: ['./leilao.component.css']
})
export class LeilaoComponent implements OnInit {

  private leiloes: Leilao[] = [];

  constructor(private leiloesService: LeiloesService) { }

  ngOnInit() {
    this.leiloesService.getLeiloes()
    .subscribe(data => {
      this.leiloes = JSON.parse(data.text());
      console.log(JSON.parse(data.text()));

    });

  
  }

  deleteLeilao(leilao){
    if (confirm("Deseja excluir o item?")) {

      console.log(leilao._id);
       
      var index = this.leiloes.indexOf(leilao);
      this.leiloes.splice(index, 1);
     
      this.leiloesService.deleteLeilao(leilao._id)
        .subscribe((response) => {
            alert("Leilão removido!");
          },
          err => {
            alert("Não pode remover o leilão.");
            // Recoloca elemento no vetor
            this.leiloes.splice(index, 0, leilao);
          });
          
    }
  }
}
