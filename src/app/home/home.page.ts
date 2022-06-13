import { Component, OnInit} from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  public resultado: String = "";
  public titulo: String = "Meu Primeiro APP";

  public imagemRandomica: String = "https://picsum.photos/800/600";
  public imagemLocal: String = "../assets/icone-celular.png";

  pesquisa: string;
  nome: string;

  constructor(private navegacao: NavController) { }

  ngOnInit() {
  }


  recuperar(){
    this.resultado = this.nome;
  }

  abrirBotoes(){
    this.navegacao.navigateForward('botoes');
  }

  abrirLista(){
    this.navegacao.navigateForward('lista');
  }

  public atualiza(): void{
    this.titulo = "Texto Alterado";
  }

  public acao(): void{
    this.titulo = "Botão clicado";
  }
}
