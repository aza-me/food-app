import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Comment } from './comment.entity';
import { CommentService } from './comment.service';

@Controller('recipes/:recipeId/comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) {}

  @Get()
  async findAll(@Param('recipeId') recipeId: number): Promise<Comment[]> {
    return this.commentService.findAll(recipeId);
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Comment> {
    return this.commentService.findOne(id);
  }

  @Post()
  async create(
    @Param('recipeId') recipeId: number,
    @Body() comment: Comment,
  ): Promise<Comment> {
    return this.commentService.create(recipeId, comment);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() comment: Comment,
  ): Promise<Comment> {
    return this.commentService.update(id, comment);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.commentService.remove(id);
  }
}
