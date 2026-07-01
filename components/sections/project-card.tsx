import Image from "next/image";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardFooter,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

export function ProjectCard({
  title,
  description,
  href,
  image,
  meta,
}: {
  title: string;
  description: string;
  href: string;
  image?: string;
  meta?: string;
}) {
  return (
    <a href={href} target="_blank" rel="noreferrer noopener" className="group block">
      <Card className="h-full transition-colors group-hover:border-primary/50">
        {image && (
          <div className="mx-6 flex h-12 items-center">
            <Image src={image} alt={title} width={40} height={40} className="object-contain" />
          </div>
        )}
        <CardHeader>
          <CardTitle className="group-hover:text-primary">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
        {meta && (
          <CardFooter>
            <Badge variant="outline">{meta}</Badge>
          </CardFooter>
        )}
      </Card>
    </a>
  );
}
