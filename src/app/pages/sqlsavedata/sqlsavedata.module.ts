import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { SqlsavedataPage } from './sqlsavedata.page';

const routes: Routes = [
  {
    path: '',
    component: SqlsavedataPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [SqlsavedataPage]
})
export class SqlsavedataPageModule {}
