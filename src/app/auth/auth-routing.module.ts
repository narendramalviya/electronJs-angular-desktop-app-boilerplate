import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginLayoutComponent } from '../layout/login-layout/login-layout.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    data: { title: 'Initial Load' },
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginLayoutComponent,
    data: { title: 'First Component' },
    children: [
      {
        path: '',
        component: LoginComponent,
        data: { title: 'Scan QR For Login' }
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }
