import {
  Controller,
  Get,
  Post,
  Put,
  Delete,
  Body,
  Param,
} from '@nestjs/common';
import { Recipe } from './recipe.entity';
import { RecipeService } from './recipe.service';

@Controller('recipes')
export class RecipeController {
  constructor(private readonly recipeService: RecipeService) {}

  @Get()
  async findAll(): Promise<Recipe[]> {
    return this.recipeService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Recipe> {
    return this.recipeService.findOne(id);
  }

  @Post()
  async create(@Body() recipe: Recipe): Promise<Recipe> {
    return this.recipeService.create(recipe);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() recipe: Recipe,
  ): Promise<Recipe> {
    return this.recipeService.update(id, recipe);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.recipeService.remove(id);
  }
}
