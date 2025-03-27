import { ArrowUpRight } from "lucide-react";
import Image, { StaticImageData } from "next/image";
import Link from "next/link";

interface BlogCardProps {
  title: string;
  description: string;
  imageUrl: StaticImageData;
}

export function BlogCard({ title, description, imageUrl }: BlogCardProps) {
  return (
    <div className="rounded-lg shadow-sm bg-card  ">
      <Image
        src={imageUrl || "/placeholder.svg"}
        alt="Scenic travel destination"
        className="object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl font-medium tracking-tight text-card-foreground mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground mb-4">{description}</p>
        <div className="flex justify-end">
          <Link
            href=""
            className="inline-flex items-center text-primary hover:text-primary/80 transition-colors"
          >
            Read More <ArrowUpRight className="ml-1 h-4 w-4" />
          </Link>
        </div>
      </div>
    </div>
  );
}
