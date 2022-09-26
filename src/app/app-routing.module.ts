import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {GeneratorComponent} from './components/generator/generator.component';


const routes: Routes = [
  {path: '', redirectTo: 'generate', pathMatch: 'full'},
  {path: 'generate', component: GeneratorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
