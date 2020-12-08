import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Dados } from 'src/app/_models/Dados';
import { DadosService } from 'src/app/_services/dados.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-dados',
  templateUrl: './dados.component.html',
  styleUrls: ['./dados.component.scss']
})
export class DadosComponent implements OnInit {

  dadosFiltrados: Dados[];
  dados: Dados[];
  dado: Dados;
  _filtroLista = '';
  modoSalvar = 'post';

  registerForm: any;

  constructor(
      private dadosService: DadosService,
      private formBuilder : FormBuilder,
      private toastr: ToastrService,
  ) {
  }

  get filtroLista(): string {
    return this._filtroLista;
  }
  set filtroLista(value: string) {
    this._filtroLista = value;
    this.dadosFiltrados = this.filtroLista ? this.filtrarDados(this.filtroLista) : this.dados;
  }

  openModal(template: any) {
    template.show(template);
  }

  novoDado(template: any) {
    this.modoSalvar = 'post';
    this.openModal(template);
  }

  editarEvento(dado: Dados, template: any) {
    this.modoSalvar = 'put';
    this.openModal(template);
    this.dado = Object.assign({}, dado);
    this.registerForm.patchValue(this.dado);
  }

  ngOnInit() {
    this.validation();
    this.getDados();
  }

  filtrarDados(filtrarPor: string): Dados[] {
    filtrarPor = filtrarPor.toLocaleLowerCase();
    return this.dados.filter(
      dado => dado.nome.toLocaleLowerCase().indexOf(filtrarPor) !== -1
    );
  }

  validation(){
      this.registerForm = this.formBuilder.group({
        nome: ['', [Validators.required, Validators.minLength(4), Validators.maxLength(50)]],
        cpf: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        rg: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(10)]],
        telefone1: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
        telefone2: ['', [Validators.required, Validators.minLength(11), Validators.maxLength(14)]],
      })
  }

  salvarAlteracao(template: any){
    if (this.registerForm.valid) {
      if (this.modoSalvar === 'post') {
        this.dado = Object.assign({}, this.registerForm.value);

        this.dadosService.postDados(this.dado).subscribe(
          (novoDado: Dados | any) => {
            template.hide();
            this.getDados();
            this.toastr.success('Inserido com Sucesso!');
          }, error => {
            this.toastr.error(`Erro ao Inserir: ${error}`);
          }
        );
      } else {
        this.dado = Object.assign({ id: this.dado.id }, this.registerForm.value);

        this.dadosService.putDados(this.dado).subscribe(
          () => {
            template.hide();
            this.getDados();
            this.toastr.success('Editado com Sucesso!');
          }, error => {
            // this.toastr.error(`Erro ao Editar: ${error}`);
            console.log(error);
          }
        );
      }
    }
  }

  getDados() {
    this.dadosService.getData().subscribe(
    (_dados: Dados[]) => {
      this.dados = _dados;
      this.dadosFiltrados = this.dados;
    }, error => {
      console.log(error);
    });
  }

}
