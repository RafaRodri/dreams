import { Component, Input, OnInit } from '@angular/core';
import { ModalController, PopoverController } from '@ionic/angular';
import { ModalComponent } from '../../modal/modal.component';
import { DreamService } from '../../../providers/dream/dream.provider';

@Component({
  selector: 'app-dream',
  templateUrl: './dream.page.html',
  styleUrls: ['./dream.page.scss'],
})
export class DreamPage implements OnInit {

  // dreams: Dream[]
  dreams: any[];

  @Input() category: string;

  constructor(private modalCtrl: ModalController,
              private popoverCtrl: PopoverController,
              private dreamsService: DreamService) { }


  /* Modal */
  async showModal(id: number) {
    const modal = await this.modalCtrl.create({
      component: ModalComponent,
      componentProps: {
        id: id
      }
    });
    return await modal.present();
  }


  // /* Popover */
  // async showPopover(id: number){
  //   const popover = await this.popoverCtrl.create({
  //     component: PopoverComponent,
  //     //event: id,
  //     translucent: true
  //     // componentProps: {
  //     //     data: id
  //     // }
  //   });
  //   return await popover.present();
  // }

  ngOnInit() {
    // this.dreamsService.getDreams(this.category).subscribe(dreams => this.dreams = dreams)
    this.dreamsService.getDreams(this.category).subscribe(dreams => {
      // console.log(this.category);
      // console.log(dreams);
      this.dreams = dreams;
    });
  }

}
