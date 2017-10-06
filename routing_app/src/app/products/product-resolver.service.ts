import { IProduct } from "./product";
import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs/Observable";
import { ProductService } from "./product.service";

@Injectable()

export class ProductResolver implements Resolve<IProduct>{

    constructor (private productService: ProductService){}

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProduct> {
        let id = +route.params['id'];
        let product = this.productService.getProduct(id);
        return product;
        
    }
    
}
