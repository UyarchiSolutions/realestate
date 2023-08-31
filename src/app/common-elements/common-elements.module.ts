import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmptyHeaderAllComponent } from './empty-header-all/empty-header-all.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    EmptyHeaderAllComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports:[EmptyHeaderAllComponent],
  providers:[EmptyHeaderAllComponent]
})
export class CommonElementsModule { }
