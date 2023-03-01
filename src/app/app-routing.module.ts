import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OwnerComponent } from './owner/owner.component';
import { StartPostingComponent } from './start-posting/start-posting.component';

const routes: Routes = [
  {path:'owner',component:OwnerComponent},
  {path:"start-posting",component:StartPostingComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
