import Link from "next/link";
import { db } from "~/server/db";

export const dynamic = "force-dynamic";

const mockUrls = [
  "https://utfs.io/f/0522cd0c-03a1-4974-929b-704c28002671-5kc8au.png",
  "https://utfs.io/f/d792f9c7-a853-4872-aad3-3bafe1a20bca-5kl0em.png",
  "https://utfs.io/f/b2952e7d-b628-4e17-9038-15a4a15008df-5kqp9s.png",
  "https://utfs.io/f/5f734c1d-38d6-47d4-a259-96e7723d07ad-oncbve.png"
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          posts.map((post) => (<div key={post.id}>{post.name}</div>))
        }
        {
          [...mockImages, ...mockImages, ...mockImages].map((image, index) => (
            <div key={image.id + "-" + index} className="w-48">
              <img src={image.url} />
            </div>
          ))
        }
      </div>
      Meowdy, Parner
    </main>
  )
}