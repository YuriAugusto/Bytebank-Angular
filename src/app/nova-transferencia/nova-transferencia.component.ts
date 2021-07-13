import { Transferencia } from './../models/transferencia.model';
import { Component, Output, EventEmitter} from '@angular/core';
import { TransferenciaService } from '../services/transferencia.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nova-transferencia' /* nome da tag */,
  templateUrl:'./nova-transferencia.component.html',/* link do caminho do arquivo html */
  styleUrls: ['./nova-transferencia.component.scss'], /* link do arquivo de style */
})

export class NovaTransferenciaComponent {

  @Output() aoTransferir = new EventEmitter<any>();//metadata @Output() usado para criar um evento que emite dados

  valor: number;//valores recebidos através do html
  destino: number;

  constructor(private service: TransferenciaService, private router: Router){}

  transferir() {//o método é acionado assim que o submit é realizado
    console.log('Solicitada nova transferência!');

    const valorEmitir: Transferencia = { valor: this.valor, destino: this.destino };

    this.service.adicionar(valorEmitir).subscribe(
      (resultado) => {
      console.log(resultado);
      this.limparCampos();
      this.router.navigateByUrl('extrato');//aqui eu passo a string que representa rota (o path) que representa um elemento
    },
      error => console.error(error)
    );

  }

  limparCampos(){
    this.valor = 0;
    this.destino = 0;
  }


}
