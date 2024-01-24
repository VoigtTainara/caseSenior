import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AlmoxarifeComponent } from '../almoxarife/almoxarife.component';

const routes: Routes = [
    { path: 'almoxarife', component: AlmoxarifeComponent },
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}