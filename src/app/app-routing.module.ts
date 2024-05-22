import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthModule } from './Authorization/auth.module';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { LoginPageComponent } from './Authorization/login-page/login-page.component';


const routes: Routes = [{
  path : 'auth', loadChildren:()=> import ("./Authorization/auth.module").then(m =>
    m.AuthModule)
},
{
  path:'',component:LoginPageComponent
},
{
  path:'dashboard',component : DashboardComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
