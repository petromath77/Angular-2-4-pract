"use strict";
var product_list_component_1 = require("./product-list.component");
var product_detail_component_1 = require("./product-detail.component");
var product_edit_component_1 = require("./product-edit.component");
exports.ROUTES = [
    { path: 'products', component: product_list_component_1.ProductListComponent },
    { path: 'products/:id', component: product_detail_component_1.ProductDetailComponent },
    { path: 'products/:id/edit', component: product_edit_component_1.ProductEditComponent },
];
//# sourceMappingURL=product.routes.js.map