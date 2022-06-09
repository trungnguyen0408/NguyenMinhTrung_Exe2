import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AgreementsComponent } from './features/agreements/agreements.component';
import { HomeComponent } from './features/home/home.component';



const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'agreements', component: AgreementsComponent },
  { path: '**', redirectTo: '' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
