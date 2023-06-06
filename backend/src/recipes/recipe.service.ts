import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Recipe } from './recipe.entity';

@Injectable()
export class RecipeService {
  constructor(
    @InjectRepository(Recipe)
    private readonly recipeRepository: Repository<Recipe>,
  ) {}

  async findAll(
    sortBy?: 'ASC' | 'DESC',
    searchQuery?: string,
  ): Promise<Recipe[]> {
    const query = this.recipeRepository.createQueryBuilder('recipe');

    if (sortBy) {
      query.orderBy(`recipe.cookingTime`, sortBy);
    }

    if (searchQuery) {
      query.where('recipe.title ILIKE :searchQuery', {
        searchQuery: `%${searchQuery}%`,
      });
    }

    return query.getMany();
  }

  async findOne(id: number): Promise<Recipe> {
    return this.recipeRepository.findOne({ where: { id } });
  }

  async create(recipe: Recipe): Promise<Recipe> {
    return this.recipeRepository.save(recipe);
  }

  async update(id: number, recipe: Recipe): Promise<Recipe> {
    await this.recipeRepository.update(id, recipe);
    return this.recipeRepository.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.recipeRepository.delete(id);
  }
}
