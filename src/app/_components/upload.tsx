"use client"

import { useRouter } from "next/navigation";
import { UploadButton } from "~/utils/uploadthing";

export function Upload() {
    const router = useRouter();

    return (
        <div className="flex h-48 justify-center">
            <UploadButton 
                endpoint="imageUploader"
                onClientUploadComplete={() => {
                    router.refresh();
                }}
            />
        </div> 
    )
}