import Link from "next/link";

interface AmenityCardProps {
  name: string;
  description: string;
  image: string;
}

export function AmenityCard({ name, description, image }: AmenityCardProps) {
  return (
    <div className="flex flex-col group amenity-card" data-testid={`card-amenity-${name.toLowerCase().replace(/\s/g, '-')}`}>
      <div className="relative aspect-square w-full overflow-hidden bg-[#f5f5f5] rounded-none">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <Link 
          href="/contact"
          className="absolute bottom-4 left-4 bg-white text-[#111111] px-6 py-3 rounded-full font-medium text-[14px] hover:bg-[#f5f5f5] transition-colors shadow-none"
          data-testid={`button-enquire-amenity-${name.toLowerCase().replace(/\s/g, '-')}`}
        >
          Enquire
        </Link>
      </div>
      
      <div className="pt-6 flex flex-col gap-2">
        <h3 className="font-medium text-[24px] text-[#111111]">{name}</h3>
        <p className="text-[14px] text-[#707072] font-medium leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
}