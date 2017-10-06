"use strict";
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_edit_component_1 = require("./product-edit.component");
var product_resolver_service_1 = require("./product-resolver.service");
exports.ROUTES = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/:id', component: product_detail_component_1.ProductDetailComponent, resolve: { product: product_resolver_service_1.ProductResolver } },
    { path: 'products/:id/edit', component: product_edit_component_1.ProductEditComponent, resolve: { product: product_resolver_service_1.ProductResolver } },
];
//# sourceMappingURL=product.routes.js.map