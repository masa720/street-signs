"use client";

import ImageCard from "@/components/ImageCard";

// sample data
const samplePosts = [
  {
    id: 1,
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=400&fit=crop",
    title: "Beautiful Mountain Landscape",
    description: "Breathtaking view at sunrise",
    likes: 1234,
  },
  {
    id: 2,
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=500&fit=crop",
    title: "Forest Path",
    description: "Serene beauty of nature",
    likes: 856,
  },
  {
    id: 3,
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=300&fit=crop",
    title: "Ocean Sunset",
    description: "Orange sky and sea at dusk",
    likes: 2103,
  },
  {
    id: 4,
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=600&fit=crop",
    title: "City Nightscape",
    description: "Glowing city lights",
    likes: 3421,
  },
  {
    id: 5,
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=450&fit=crop",
    title: "Flower Field",
    description: "Spring flowers in bloom",
    likes: 987,
  },
  {
    id: 6,
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=350&fit=crop",
    title: "Historic Building",
    description: "Stone architecture with history",
    likes: 654,
  },
  {
    id: 7,
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=550&fit=crop",
    title: "Lake Reflection",
    description: "Mirror-like water surface",
    likes: 1789,
  },
  {
    id: 8,
    imageUrl:
      "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop",
    title: "Desert Sunset",
    description: "Sun setting on the horizon",
    likes: 2345,
  },
  {
    id: 9,
    imageUrl:
      "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=400&h=480&fit=crop",
    title: "Snow Forest",
    description: "Winter wonderland",
    likes: 1567,
  },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {samplePosts.map(post => (
            <div key={post.id} className="break-inside-avoid">
              <ImageCard post={post} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
