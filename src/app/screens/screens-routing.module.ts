import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageNotFoundComponent } from '../components';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ManageStockComponent } from './manage-stock/manage-stock.component';
import { MastersComponent } from './masters/masters.component';
import { PurchasesInwardsComponent } from './purchases-inwards/purchases-inwards.component';
import { SalesDeliveryComponent } from './sales-delivery/sales-delivery.component';

const routes: Routes = [
  { path: '', component: DashboardComponent },
  { path: 'sales-delivery', component: SalesDeliveryComponent },
  { path: 'purchases-inwards', component: PurchasesInwardsComponent },
  { path: 'manage-stock', component: ManageStockComponent },
  { path: 'masters', component: MastersComponent },
  {
    path: '**', component: PageNotFoundComponent
  }


];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ScreensRoutingModule { }
