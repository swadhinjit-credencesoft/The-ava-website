import Link from "next/link";
import { Check } from "lucide-react";

interface RoomCardProps {
  id: string;
  name: string;
  type: string;
  description: string;
  image: string;
  features: string[];
}

export function RoomCard({ id, name, type, description, image, features }: RoomCardProps) {
  return (
    <div className="flex flex-col group room-card" data-testid={`card-room-${id}`}>
      <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f5f5] rounded-none">
        <img 
          src={image} 
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-white px-4 py-2 rounded-full shadow-none">
          <span className="font-medium text-[12px] text-[#111111] uppercase tracking-wider">{type}</span>
        </div>
      </div>
      
      <div className="pt-6 flex flex-col gap-4">
        <div className="flex justify-between items-start gap-4">
          <h3 className="font-medium text-[24px] text-[#111111]">{name}</h3>
        </div>
        
        <p className="text-[14px] text-[#707072] font-medium leading-relaxed">
          {description}
        </p>

        <div className="flex flex-wrap gap-x-4 gap-y-2 mt-2">
          {features.slice(0, 4).map((feature, idx) => (
            <div key={idx} className="flex items-center gap-2">
              <Check size={14} className="text-[#111111]" />
              <span className="text-[12px] text-[#111111] font-medium">{feature}</span>
            </div>
          ))}
        </div>

        <div className="mt-4 pt-4 border-t border-[#cacacb]">
          <Link 
            href={`/contact?room=${id}`}
            className="inline-flex items-center justify-center bg-[#111111] text-white px-8 py-3 rounded-full font-medium text-[14px] hover:bg-[#333333] transition-colors w-full sm:w-auto"
            data-testid={`button-book-room-${id}`}
          >
            Book This Room
          </Link>
        </div>
      </div>
    </div>
  );
}