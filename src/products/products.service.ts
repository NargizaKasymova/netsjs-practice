import { Injectable } from '@nestjs/common';
// import { CreateProductDto } from './dto/create-product.dto';
import { CreateProductDto} from './dto/create-product.dto';
import { InjectModel } from "@nestjs/mongoose"
import { Model } from 'mongoose'
import { Product, ProductDocument } from "./schemas/product.schema"



@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<productDocument>) {

    }


    // private products = []

    // getAll() {
    //     return this.products
    // }

    // getById(id: string) {
    //     return this.products.find(p => p.id === id)
    // }

    // create(productDto: CreateProductDto) {
    //     this.products.push({
    //         ...productDto,
    //         id: Date.now().toString()
        // })
    // }
}