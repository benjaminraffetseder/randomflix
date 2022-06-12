import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { TopbarComponent } from './topbar.component';

@NgModule({
  declarations: [TopbarComponent],
  imports: [CommonModule, IonicModule],
  exports: [TopbarComponent],
})
export class TopbarModule {}
