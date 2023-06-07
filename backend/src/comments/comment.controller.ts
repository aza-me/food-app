import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('recipes/:recipeId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(@Param('recipeId') recipeId: number): Promise<Comment[]> {
    return this.commentService.findAll(recipeId);
  }

  @Post()
  async create(
    @Param('recipeId') recipeId: number,
    @Body() comment: Comment,
  ): Promise<Comment> {
    return this.commentService.create(recipeId, comment);
  }
}
