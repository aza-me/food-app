import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Recipe } from '../recipes/recipe.entity';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => Recipe, (recipe) => recipe.comments, { onDelete: 'CASCADE' })
  recipe: Recipe;
}
