import Image from 'next/image';

interface CategoryCardProps {
  image: string;
  title: string;
  subtitle: string;
  category: string;
  href?: string;
}

export default function CategoryCard({
  image,
  title,
  subtitle,
  category,
  href,
}: CategoryCardProps) {
  const content = (
    <div className="group relative block aspect-square overflow-hidden rounded-sm">
      <Image
        src={image}
        alt={category}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-300"
        sizes="(max-width: 768px) 50vw, 25vw"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        <p className="text-xs uppercase tracking-wider mb-1 opacity-90">{title}</p>
        <h3 className="text-2xl font-serif font-bold">{category}</h3>
      </div>
    </div>
  );

  if (href) {
    return <a href={href}>{content}</a>;
  }

  return content;
}
