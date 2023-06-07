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
      url: 'postgresql://doadmin:AVNS_ZOy1wZQ8-U1sPZoYTKc@db-postgresql-nyc1-32147-do-user-14205391-0.b.db.ondigitalocean.com:25060/defaultdb',
      synchronize: true,
      logging: true,
      entities: [Recipe, Comment],
      ssl: {
        rejectUnauthorized: false,
      },
    }),
    TypeOrmModule.forFeature([Recipe, Comment]),
  ],
  controllers: [RecipeController, CommentController],
  providers: [RecipeService, CommentService],
})
export class AppModule {}
