import { Component, OnInit, ViewChild } from '@angular/core';
import { detectChangesInternal } from '@angular/core/src/render3/instructions';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-segment',
  templateUrl: './segment.page.html',
  styleUrls: ['./segment.page.scss'],
})
export class SegmentPage implements OnInit {

  @ViewChild(IonSegment) segment: IonSegment;

  superHeroes: Observable<any>;

  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.segment.value = 'todos';
    this.superHeroes = this.dataService.getHeroes();
  }


  segmentChanged( event ) {

    const valorSegmento = event.detail.value;
    console.log( valorSegmento );
  }

}
