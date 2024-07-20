"use client"

import { UploadButton } from "~/utils/uploadthing";
import { useRouter } from "next/navigation";

export function TopNav() {
    const router = useRouter();
  
    return (
      <nav className="flex w-full items-center justify-between border-b p-4 text-xl font-semibold">
        <div>
          Gallery
        </div>
  
        <div>
          <UploadButton 
            endpoint="imageUploader" 
            onClientUploadComplete={() => {
              router.refresh();
            }}
          />
        </div>
  
        <div>
          Sign In
        </div>
      </nav>
    );
  }