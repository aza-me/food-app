export type CommentId = number;

export interface CommentModel {
  id: CommentId;
  content: string;
}

export interface CreateCommentModel extends Omit<CommentModel, 'id'> {}
