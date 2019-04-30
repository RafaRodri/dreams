import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';

import {PopoverComponent} from './popover.component';

@NgModule({
    imports: [
        CommonModule,
        IonicModule
    ],
    declarations: [PopoverComponent],
    entryComponents: [PopoverComponent],
    exports: [PopoverComponent]
})
export class PopoverComponentModule {}
