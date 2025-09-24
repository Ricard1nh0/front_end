import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule 
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
  username = '';
  password = '';

  onSubmit() {
    console.log('--- Formulário Enviado ---');
    console.log('Usuário:', this.username);
    console.log('Senha:', this.password);
    
    console.log('Dados do Login:', {
      user: this.username,
      pass: this.password
    });
  }
}