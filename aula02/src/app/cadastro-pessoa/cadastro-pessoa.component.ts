import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-cadastro-pessoa',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule 
  ],
  templateUrl: './cadastro-pessoa.component.html',
  styleUrl: './cadastro-pessoa.component.css'
})
export class CadastroPessoaComponent {
  
  nome: string = '';
  dataNascimento: string = '';
  telefone: string = '';
  endereco: string = '';

  onSubmit() {
    console.log('--- Dados do Cadastro Recebidos ---');
    
    const dadosCadastro = {
      nome: this.nome,
      nascimento: this.dataNascimento,
      telefone: this.telefone,
      endereco: this.endereco
    };
    
    console.log(dadosCadastro);
  }
}