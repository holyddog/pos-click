import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params  } from '@angular/router';
import { ProductService } from '../../services/product.service';
import { AppComponent } from '../../app.component';

@Component({
    selector: 'homecategory-component',
    templateUrl: 'homecategory.component.html'
})
export class HomecategoryComponent implements OnInit {

    products: any=[];
    orderproducts: any[];
    sortproduct:any = [];
    categoryselect:any=[];
    homeId: any = 1;
    se: any='';
    numproduct= 0;
    viewtable = this.app.viewtable;
    changeview(){
        this.viewtable = this.app.changeview();
    }
    //constructor(private router: Router) { }

    constructor(private productService: ProductService, private router: Router,private activatedRoute: ActivatedRoute,private app:AppComponent) {}

    ngOnInit() {
        this.numproduct = this.app.cartvalue;
        this.orderproducts = JSON.parse(sessionStorage.getItem('cart'));
        this.categoryselect = JSON.parse(sessionStorage.getItem('catagory'));
        this.productService.list(this.homeId,1000)
          .then((data: any) => {
              if (data.result == "SUCCESS") {
                  this.products = data.data;
                  if(this.products!=null){
                    this.findsort(this.categoryselect.code);
                  }
              }
            });
    }
        pressnullpic(pic:any):any{
        //console.log("gogo");
            if(pic==null){ 
                     //pic="http://www.john-james-andersen.com/wp-content/uploads/nullimage1.gif"
                    pic = "https://benetis.me/images/2017/02/Screen-Shot-2017-02-11-at-15.02.26.png";
            }
            return pic;
        
    }
    findsort(code:any){
        this.sortproduct=[];
         this.se = code;
         console.log(this.se);
         for(var j = 0, len = this.products.length; j < len; j++){
             //console.log(this.products[j].marketplaceCategoryCode);
             if(this.se==this.products[j].marketplaceCategoryCode){
                 this.sortproduct.push(this.products[j]);
             }
        }
    }
    updatesort(){
        this.categoryselect = JSON.parse(sessionStorage.getItem('catagory'));
        if(this.categoryselect.code != this.se){
            this.findsort(this.categoryselect.code);
        }
    }
    openproduct(id: any){
        this.router.navigate(['/product', id]);
    }
    opencart(){
        this.router.navigate(['/order']);
    }
    searchproduct(id:any){
        if(id){
            this.findsort(id);
            this.categoryselect = JSON.parse(sessionStorage.getItem('catagory'));
        }
        else{
          this.sortproduct =  this.products;
           console.log("not input");
        }
        
    }
}
