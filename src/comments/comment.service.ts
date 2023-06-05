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

  async findOne(id: number): Promise<Comment> {
    return this.commentRepository.findOne({
      where: {
        id,
      },
      relations: ['recipe'],
    });
  }

  async create(recipeId: number, comment: Comment): Promise<Comment> {
    const newComment = this.commentRepository.create(comment);
    newComment.recipe = { id: recipeId } as Recipe;
    return this.commentRepository.save(newComment);
  }

  async update(id: number, comment: Comment): Promise<Comment> {
    await this.commentRepository.update(id, comment);
    return this.commentRepository.findOne({
      where: { id },
      relations: ['recipe'],
    });
  }

  async remove(id: number): Promise<void> {
    await this.commentRepository.delete(id);
  }
}
