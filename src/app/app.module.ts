import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { HomepageComponent } from './components/home/homepage.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';
import { ProductdetailComponent } from './components/product/productdetail.component';
import { OrderComponent } from './components/order/order.component';
import { CreateorderComponent } from './components/createorder/createorder.component';
import { PaymentComponent } from './components/payment/payment.component';
import { SearchorderComponent} from './components/searchorder/searchorder.component';
import { SearchordermerchantComponent} from './components/searchorder/searchordermerchant.component';
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import {HomecategoryComponent} from'./components/homecategory/homecategory.component';
import {CreatepaymentComponent} from './components/createpayment/createpayment.component';
import {SearchorderdetailmerchantComponent} from './components/searchorderdetail/searchorderdetailmerchant.component';
import {SearchorderdetailComponent} from './components/searchorderdetail/searchorderdetail.component';


import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { DetailproductService } from './services/detailproduct.service';
import { OrderpriceService } from './services/orderprice.service';
import { OrderdetailService } from './services/orderdetail.service';
import { CreateorderService } from './services/createorder.service';
import { SearchorderService } from './services/searchorder.service';
import { SearchordermerchantService } from './services/searchordermerchant.service';
import { CreateproductService } from './services/createproduct.service';
import { MerchantService } from './services/merchant.service';
import { MarketplacecategoryService } from './services/marketplacecategory.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        HomepageComponent,
        LoginComponent,
        ProductComponent,
        OrderComponent,
        CreateorderComponent,
        PaymentComponent,
        SearchorderComponent,
        SearchordermerchantComponent,
        ProductdetailComponent,
        CreateproductComponent,
        HomecategoryComponent,
        CreatepaymentComponent,
        SearchorderdetailmerchantComponent,
        SearchorderdetailComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        RouterModule.forRoot([
            {
                path: '',
                component: HomeComponent,
                pathMatch: 'full'
            },
            { path: 'login', component: LoginComponent },
            { path: 'home/:id', component: HomepageComponent },
            { path: 'home', component: HomeComponent },
            { path: 'product/:id', component: ProductComponent },
            { path: 'detailproduct/:id', component: ProductdetailComponent },
            { path: 'order', component: OrderComponent },
            { path: 'createorder' , component: CreateorderComponent},
            { path: 'payment' , component: PaymentComponent},
            { path: 'search', component: SearchorderComponent },
            { path: 'searchmerchant', component: SearchordermerchantComponent },
            { path: 'newproduct', component: CreateproductComponent },
            { path: 'homecategory', component: HomecategoryComponent },
            { path: 'createpayment', component: CreatepaymentComponent },
            { path: 'merchantorderdetail', component: SearchorderdetailmerchantComponent },
            { path: 'customerorderdetail', component: SearchorderdetailComponent },
        ])
    ],
    providers: [[CategoryService],[ProductService],[DetailproductService],[OrderpriceService],[CreateorderService],[SearchorderService],[SearchordermerchantService],[CreateproductService],[MerchantService],[MarketplacecategoryService],[OrderdetailService]],
    bootstrap: [AppComponent]
})
export class AppModule { }
