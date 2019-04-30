import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { ModalComponentModule } from '../modal/modal.module';
import { PopoverComponentModule } from '../popover/popover.module';

import { DreamService } from '../../providers/dream/dream.provider';
import { CategoryService } from '../../providers/category/category.provider';
import { DreamPage } from './dream/dream.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalComponentModule,
    PopoverComponentModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, DreamPage],
  providers: [DreamService, CategoryService]
})
export class HomePageModule {}
