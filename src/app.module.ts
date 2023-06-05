import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Recipe } from './recipes/recipe.entity';
import { RecipeController } from './recipes/recipe.controller';
import { RecipeService } from './recipes/recipe.service';
import { CommentService } from './comments/comment.service';
import { CommentController } from './comments/comment.controller';
import { Comment } from './comments/comment.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.POSTGRES_HOST,
      port: Number(process.env.POSTGRES_PORT),
      username: process.env.POSTGRES_USER,
      password: process.env.POSTGRES_PASSWORD,
      database: process.env.POSTGRES_DB,
      entities: [Recipe, Comment],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Recipe, Comment]),
  ],
  controllers: [RecipeController, CommentController],
  providers: [RecipeService, CommentService],
})
export class AppModule {}
