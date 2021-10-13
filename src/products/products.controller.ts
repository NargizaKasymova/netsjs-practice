import { Body, 
    Controller, 
    Delete, 
    Get, 
    Header, 
    HttpCode, 
    HttpStatus, 
    Param, 
    Post, 
    Put, 
    Redirect, 
    Req, 
    Res 
} from '@nestjs/common';
import { appendFile } from 'fs';
import { CreateProductDto} from './dto/create-product.dto';
import { UpdateProductDto} from './dto/update-product.dto';
import { ProductsService } from './products.service';
import {Response, Request} from 'express'
//express
// app.use((req, res, next) => {
//     res.status(201).end('Poka')
// })



@Controller('products')
export class ProductsController {

    constructor(private readonly productsService: ProductsService) {

    }



    // @Get()
    // // @Redirect('https://google.com', 301)
    // getAll(@Req() Req, @Res() res): string {
    //     res.status(201).end('Bye')
        
    //     return 'getAll'
    // }
    @Get()
    getAll() {
        // return 'getAll'
        return this.productsService.getAll()
    }


    // @Get(':id')
    // getOne(@Param() params) {

    //     return 'getOne' + params.id

    // }

    @Get(':id')
    getOne(@Param('id') id: string) {
        return this.productsService.getById(id)
        // return 'getOne' + id

    }
    @Post()
    // res.status(201)

    @HttpCode(HttpStatus.CREATED)
    @Header('Cahe-control', 'none')
    create(@Body() createProductDto: CreateProductDto) {
        // return `Title: ${createProductDto.title} => Price: ${createProductDto.price}`
        return this.productsService.create(createProductDto)
    }

    @Delete(':id') 
    remove(@Param('id') id: string) {
        return 'removed' + id
    }

    @Put(':id') 
    update(@Body() updateProductDto: UpdateProductDto, @Param('id') id: string): string {
        return 'updated id #' + id
    }


}
