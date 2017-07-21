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
import { CreateproductComponent } from './components/createproduct/createproduct.component';
import {HomecategoryComponent} from'./components/homecategory/homecategory.component';
import {CreatepaymentComponent} from './components/createpayment/createpayment.component';

import { CategoryService } from './services/category.service';
import { ProductService } from './services/product.service';
import { DetailproductService } from './services/detailproduct.service';
import { OrderpriceService } from './services/orderprice.service';
import { CreateorderService } from './services/createorder.service';
import { SearchorderService } from './services/searchorder.service';
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
        ProductdetailComponent,
        CreateproductComponent,
        HomecategoryComponent,
        CreatepaymentComponent
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
            { path: 'newproduct', component: CreateproductComponent },
            { path: 'homecategory', component: HomecategoryComponent },
            { path: 'createpayment', component: CreatepaymentComponent },
        ])
    ],
    providers: [[CategoryService],[ProductService],[DetailproductService],[OrderpriceService],[CreateorderService],[SearchorderService],[CreateproductService],[MerchantService],[MarketplacecategoryService]],
    bootstrap: [AppComponent]
})
export class AppModule { }
