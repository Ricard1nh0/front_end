import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Cliente } from '../shared/cliente';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss']
})
export class FormularioComponent implements OnInit {
  cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.cliente);
    this.cliente = new Cliente();
  }
}