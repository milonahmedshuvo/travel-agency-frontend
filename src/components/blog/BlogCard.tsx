import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  id: number | string,
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

export function BlogCard({ title, description, imageUrl, id }: BlogCardProps) {
  return (
    <div className="rounded-lg shadow-sm bg-card  ">
      <Link href={`/blog/${id}`}> 
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Scenic travel destination"
        className="object-cover"
      />
      </Link>

      <div className="p-6">
        <h2 className="text-2xl font-medium tracking-tight text-card-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-end">
          <Link
            href={`/blog/${id}`}
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors text-[#156CF0]"
          >
            Read More <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
