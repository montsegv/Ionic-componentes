import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
})
export class ModalPage implements OnInit {

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  //Modal hijo 
  async abrirModal() {
   const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Montserrat',
        pais: 'España jaja'
      }
    });

    await modal.present();
    //onDidDismiss es una promesa que escucha cuando el dismiss se cierra
    const { data } = await modal.onDidDismiss();

    console.log ( 'Retorno del modal', data);

  }
}
