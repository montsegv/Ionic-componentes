import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { DataService } from '../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {


  Componentes: Observable<Componente[]>;

  constructor( private menuCtrl: MenuController,
                private dataService: DataService) { }

  ngOnInit() {
    this.Componentes = this.dataService.getMenuOpts ();
  }

  toggleMenu () {
    this.menuCtrl.toggle();
  }
}

interface Componente {
  icon: string;
  name: string;
  redirectTo: string;
}