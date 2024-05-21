import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Authorization/auth.module';

const routes: Routes = [{
  path : 'auth', loadChildren:()=> import ("./Authorization/auth.module").then(m =>
    m.AuthModule)
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
