export interface Post {
  id: string;
  title: string;
  description: string;
  titleColor: string;
  createdAt: Date;
}

export interface Comment {
  id: string;
  postId: string;
  content: string;
  user?: {
    name: string;
    id: string;
    profilePicture: string;
  };
  createdAt: Date;
}

export type ApiStatus = "idle" | "loading" | "succeeded" | "failed";

export type PostCardMode = "post" | "comment";
export interface PostCardHeaderProps {
  post: Post;
  showComments: (post: Post) => void;
  mode?: PostCardMode;
}

export interface CommentCardProps {
  comment: Comment;
}
