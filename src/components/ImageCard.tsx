import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";

type Post = {
  id: number;
  imageUrl: string;
  title: string;
  description: string;
  likes: number;
};

type ImageCardProps = {
  post: Post;
};

const ImageCard = ({ post }: ImageCardProps) => {
  return (
    <Link href={`/posts/${post.id}`}>
      <div className="group relative overflow-hidden rounded-lg bg-white shadow-sm hover:shadow-md transition-all duration-200 cursor-pointer">
        <div className="relative overflow-hidden">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={400}
            height={400}
            className="w-full h-auto object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-200" />
        </div>

        <div className="p-3">
          <h3 className="font-medium text-sm text-gray-900 line-clamp-1">
            {post.title}
          </h3>
          {post.description && (
            <p className="text-xs text-gray-500 mt-1 line-clamp-2">
              {post.description}
            </p>
          )}
          <div className="flex items-center mt-2 text-xs text-gray-400">
            <span className="flex items-center gap-1">
              <Heart className="w-3 h-3" />
              {post.likes}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default ImageCard;
