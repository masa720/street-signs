import { z } from "zod";

export interface Post {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  location: string;
  createdAt: Date;
  updatedAt: Date;
}

export const createPostSchema = z.object({
  title: z
    .string()
    .min(1, "Title is required")
    .max(100, "Title must be 100 characters or less"),
  description: z
    .string()
    .min(1, "Description is required")
    .max(500, "Description must be 500 characters or less"),
  image: z
    .instanceof(FileList)
    .refine((files) => files.length > 0, "Image is required")
    .refine(
      (files) => files[0]?.size <= 5 * 1024 * 1024,
      "Image must be less than 5MB"
    )
    .refine(
      (files) => ["image/jpeg", "image/png", "image/webp"].includes(files[0]?.type),
      "Only JPEG, PNG, and WebP images are allowed"
    ),
  location: z
    .string()
    .min(1, "Location is required")
    .max(100, "Location must be 100 characters or less"),
});

export type CreatePostData = z.infer<typeof createPostSchema>;