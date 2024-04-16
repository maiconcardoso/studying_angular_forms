import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  constructor() {

  }

  usuario: any = {
    nome: null,
    email: null,
    endereco: {
      cep: null,
      rua: null,
      numero: null,
      complemento: null,
      bairro: null,
      cidade: null,
      estado: null
    }
  }


  onSubmit(form: any){
    console.log(form);
    //console.log(this.usuario);
  }

  consultaCEP(cep: any) {

  }

}
