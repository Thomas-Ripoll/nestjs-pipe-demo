import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    PostModule,
    TypeOrmModule.forRoot({
    name: "app",  
    type: 'mysql',
    host: 'localhost',
    port: 3309,
    username: 'root',
    password: 'root',
    database: 'test2',
    entities: ["dist/**/*.entity.js"],
    synchronize: true,
  }),
    AuthModule,
    UsersModule,
],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
