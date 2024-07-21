import { getMyImages } from "~/server/queries";


export const dynamic = "force-dynamic";

export async function Images() {
    const images = await getMyImages();
  
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