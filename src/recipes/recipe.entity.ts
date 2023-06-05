import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Comment } from '../comments/comment.entity';

@Entity()
export class Recipe {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column('text', { array: true })
  ingredients: string[];

  @Column()
  image: string;

  @Column()
  cookingTime: number;

  @OneToMany(() => Comment, (comment) => comment.recipe.id, { cascade: true })
  comments: Comment[];
}
