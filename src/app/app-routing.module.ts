import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './auth/login/login.component';
import { PageNotFoundComponent } from './components';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
// import { ScreensModule } from './screens/screens.module';

const routes: Routes = [
  // {
  //   path: '',
  //   redirectTo: 'auth',
  //   data: { title: 'Initial Load' },
  //   pathMatch: 'full'
  // },
  // {
  //   path: 'auth',
  //   loadChildren: () => import('./auth/auth.module').then(mod => mod.AuthModule)
  // },
  {
    path: '',
    component:HomeLayoutComponent,
    // pathMatch: 'full',
    loadChildren: () => import('./screens/screens.module').then(mod => mod.ScreensModule)
  },
  {
    path: '**',
    component: PageNotFoundComponent
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
