import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ProductsController } from './products/products.controller';
// import { ProductsService } from './products/products.service';
import { ProductsModule } from './products/products.module';



@Module({
  imports: [
    ProductsModule, 
    MongooseModule.forRoot("mongodb+srv://NargizaKasymova:rhfcjnrf11!@cluster0.ntx0h.mongodb.net/education?retryWrites=true&w=majority")],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
