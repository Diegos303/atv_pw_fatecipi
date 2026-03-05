import { Component } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  imports: [],
  templateUrl: './cadastro.html',
  styleUrl: './cadastro.css',
})
export class Cadastro {
    public alerta:String = "";

    public cadastrar(){
      this.alerta = "Seu cadastro foi feito com sucesso !";
    }

}
