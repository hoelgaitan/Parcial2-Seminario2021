import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';

import {ComponentsModule} from '../../components/components.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    RouterModule.forChild([{path: '', component: Tab4Page}]),
    ComponentsModule
  ],
  declarations: [Tab4Page]
})
export class Tab4PageModule {}
