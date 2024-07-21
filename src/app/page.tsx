import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { UploadButton } from "~/utils/uploadthing";

export const dynamic = "force-dynamic";

async function Images() {
  const images = await db.query.images.findMany({
    orderBy: (model, { asc }) => asc(model.id),
  });

  return (
    <div className="flex flex-wrap gap-4">
        {
          images.map((image) => (
            <div key={image.id} className="flex w-48 flex-col">
              <img src={image.url} />
              <div>{image.name}</div>
            </div>
          ))
        }
      </div>
  );
  
}

export default async function HomePage() {
  
  return (
    <main className="">
      <SignedOut>
        <div className="h-full w-full text-2xl">Please sign in!</div>
      </SignedOut>

      <SignedIn>
      <Images />
        <div>
          <UploadButton 
            endpoint="imageUploader" 
          />
        </div>
      </SignedIn>
      <div>Meowdy, Partner</div>
    </main>
  )
}