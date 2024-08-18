import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { apiEnvironment } from "./config/api.config";
import { ProductsFinanceModule } from "./views/products-finance/products-finance.module";
import { AppRoutingModule } from "./app.routes";
import { BrowserModule } from "@angular/platform-browser";
import { provideHttpClient } from "@angular/common/http";
import { ProductsService } from './core/services/products.service'


const config: SocketIoConfig = {
  url: apiEnvironment.url
};


@NgModule({
  declarations: [
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    SocketIoModule.forRoot(config),
    ProductsFinanceModule,
  ],
  providers: [ProductsService],

})
export class AppModule { }
