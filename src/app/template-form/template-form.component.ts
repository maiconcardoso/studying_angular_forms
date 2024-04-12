import { Component } from '@angular/core';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  usuario: any = {
    nome: "Maicon",
    email: "maicon@email.com"
  }


  onSubmit(form: any){
    console.log(form);
    console.log(this.usuario);
  }

}
