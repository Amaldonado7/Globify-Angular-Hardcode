import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPage } from './pages/dashboard/dashboard.page';
import { NotFoundPage } from './pages/404/notFound.page';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPage, pathMatch: 'full' },
  { path: '**', component: NotFoundPage}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
