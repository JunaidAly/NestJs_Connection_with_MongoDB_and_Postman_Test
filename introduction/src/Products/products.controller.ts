import { Body, Controller, Post ,Get, Param } from "@nestjs/common";

import { ProductsService } from "./products.service";
@Controller('products')

export class ProductController {

    constructor(private readonly productsService: ProductsService){}
    @Post()
    addProduct(
        @Body('title') prodTitle: string,
        @Body('description') prodDesc: string,
        @Body('price') prodPrice: number,
    ): any {
      const generatedId =  this.productsService.insertProduct(prodTitle,prodDesc,prodPrice);
        return {id: generatedId};
    }
    @Get()
    getAllProducts() {
        return this.productsService.getProducts();
    }
    @Get(':id')
    getProduct(@Param('id') prodId: string,){
        return this.productsService.getSingleProduct(prodId);
    }

}


