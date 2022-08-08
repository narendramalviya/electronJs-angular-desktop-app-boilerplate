import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { CoreModule } from './core/core.module';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
// NG Translate
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './components';
import { NgMaterialModule } from './ng-material/ng-material.module';
import { HomeLayoutComponent } from './layout/home-layout/home-layout.component';
import { LoginLayoutComponent } from './layout/login-layout/login-layout.component';
import { SalesDeliveryComponent } from './screens/sales-delivery/sales-delivery.component';
import { SalesOrderComponent } from './screens/sales-delivery/sales-order/sales-order.component';
import { PurchasesInwardsComponent } from './screens/purchases-inwards/purchases-inwards.component';
import { ManageStockComponent } from './screens/manage-stock/manage-stock.component';
import { MastersComponent } from './screens/masters/masters.component';

// AoT requires an exported function for factories
const httpLoaderFactory = (http: HttpClient): TranslateHttpLoader =>  new TranslateHttpLoader(http, './assets/i18n/', '.json');

@NgModule({
  declarations: [AppComponent,PageNotFoundComponent, HomeLayoutComponent, LoginLayoutComponent, SalesDeliveryComponent, SalesOrderComponent, PurchasesInwardsComponent, ManageStockComponent, MastersComponent],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    CoreModule,
    AppRoutingModule,
    SharedModule,
    NgMaterialModule,
    BrowserAnimationsModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [HttpClient]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
