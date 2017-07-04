import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { ProductComponent } from './components/product/product.component';

import { CategoryService } from './services/category.service';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        ProductComponent
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
            { path: 'product/:id', component: ProductComponent }
        ])
    ],
    providers: [CategoryService],
    bootstrap: [AppComponent]
})
export class AppModule { }
