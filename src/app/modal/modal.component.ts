import {Component, Input, OnInit} from '@angular/core';
import {Dream} from '../../model/dream.model';
import {ModalController} from '@ionic/angular';
import {DreamService} from '../../providers/dream/dream.provider';

@Component({
    selector: 'app-modal',
    templateUrl: './modal.component.html',
    styleUrls: ['./modal.component.scss'],
})
export class ModalComponent implements OnInit {

    @Input() id: any;
    dream: Dream;

    // passedId = null;

    constructor(private modalCtrl: ModalController,
                private dreamsService: DreamService) {
    }

    async close() {
        // await this.modalCtrl.dismiss({userData: 3});
        await this.modalCtrl.dismiss();
    }

    ngOnInit() {
        // this.dreamsService.getDream(this.id).subscribe(dream => this.dream = dream)
    }

}
