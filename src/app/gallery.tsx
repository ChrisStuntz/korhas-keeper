import { getMyImages } from "~/server/queries";
import Image from "next/image";
import Link from "next/link";


export const dynamic = "force-dynamic";

export async function Images() {
    const images = await getMyImages();
  
    return (
        <div className="flex flex-wrap justify-center gap-4">
        {
            images.map((image) => (
                <div key={image.id} className="flex w-48 h-48 flex-col">
                    <Link href={`/img/${image.id}`}>
                        <Image src={image.url} style={{objectFit: "contain"}} width={192} height={192}  alt={image.name} />
                    </Link>
                    <div>{image.name}</div>
                </div>
            ))
        }
        </div>
    );
  
  }