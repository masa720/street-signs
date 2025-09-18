"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { CreatePostData, createPostSchema } from "@/types/post";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  DocumentTextIcon,
  PhotoIcon,
  MapPinIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/24/outline";

export default function PostPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<CreatePostData>({
    resolver: zodResolver(createPostSchema),
  });

  const onSubmit = async (data: CreatePostData) => {
    try {
      console.log("投稿データ:", data);
      reset();
    } catch (error) {
      console.error("投稿エラー:", error);
    }
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <Card>
        <CardHeader>
          <CardTitle>Post Street Sign</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="title" className="flex items-center gap-2">
                <DocumentTextIcon className="h-4 w-4" />
                Title
              </Label>
              <Input
                id="title"
                {...register("title")}
                placeholder="Enter sign name or feature"
                className={errors.title ? "border-destructive" : ""}
              />
              {errors.title && (
                <p className="text-sm text-destructive">
                  {errors.title.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="description" className="flex items-center gap-2">
                <DocumentTextIcon className="h-4 w-4" />
                Description
              </Label>
              <Textarea
                id="description"
                {...register("description")}
                placeholder="Enter detailed information about the sign"
                rows={4}
                className={errors.description ? "border-destructive" : ""}
              />
              {errors.description && (
                <p className="text-sm text-destructive">
                  {errors.description.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="image" className="flex items-center gap-2">
                <PhotoIcon className="h-4 w-4" />
                Image
              </Label>
              <Input
                id="image"
                type="file"
                accept="image/jpeg,image/png,image/webp"
                {...register("image")}
                className={errors.image ? "border-destructive" : ""}
              />
              {errors.image && (
                <p className="text-sm text-destructive">
                  {errors.image.message}
                </p>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="location" className="flex items-center gap-2">
                <MapPinIcon className="h-4 w-4" />
                Location
              </Label>
              <Input
                id="location"
                {...register("location")}
                placeholder="City, State/Prefecture"
                className={errors.location ? "border-destructive" : ""}
              />
              {errors.location && (
                <p className="text-sm text-destructive">
                  {errors.location.message}
                </p>
              )}
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full">
              <PaperAirplaneIcon className="h-4 w-4 mr-2" />
              {isSubmitting ? "Posting..." : "Post"}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
