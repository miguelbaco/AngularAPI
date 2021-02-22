import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FotosComponent } from './fotos/fotos.component';
import { TrivialComponent } from './trivial/trivial.component';

const routes: Routes = [
  {path: 'fotos', component: FotosComponent},
  {path: 'trivial', component: TrivialComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
