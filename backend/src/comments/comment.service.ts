import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { Recipe } from '../recipes/recipe.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepository: Repository<Comment>,
  ) {}

  async findAll(recipeId: number): Promise<Comment[]> {
    return this.commentRepository.find({
      where: { recipe: { id: recipeId } },
    });
  }

  async create(recipeId: number, comment: Comment): Promise<Comment> {
    const newComment = this.commentRepository.create(comment);
    newComment.recipe = { id: recipeId } as Recipe;
    return this.commentRepository.save(newComment);
  }
}
