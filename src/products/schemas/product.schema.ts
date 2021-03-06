import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose'
import { Mongoose, Document } from 'mongoose'


// new Mongoose.Schema({
//     title: String,
//     price: Number
// })

export type ProductDocument = Product & Document

@Schema()

export class Product {
    @Prop()
    title: string

    @Prop()
    price: number
}

export const ProductSchema = SchemaFactory.createForClass(Product) 