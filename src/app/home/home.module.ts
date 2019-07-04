import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { CameraUsePage } from '../pages/camera-use/camera-use.page';

import { HomePage } from './home.page';
import { SqlsavedataPage } from '../pages/sqlsavedata/sqlsavedata.page';
import { ChartPage } from '../pages/chart/chart.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: HomePage
      }
    ])
  ],
  declarations: [HomePage, SqlsavedataPage, ChartPage, CameraUsePage]
})
export class HomePageModule {}
