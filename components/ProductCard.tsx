import Link from 'next/link';
import { Product } from '@/app/data/products';

const labelConfig = {
  new: { text: 'NEW ★', className: 'bg-white text-black drop-shadow-sm' },
  waterproof: { text: 'Waterproof ≋', className: 'bg-[#4B5CC4] text-white' },
  limited_edition: { text: 'Limited edition', className: 'bg-[#D92D20] text-white' },
};

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  const label = product.label ? labelConfig[product.label] : null;

  return (
    <div className="bg-transparent flex flex-col h-full group">
      
      {/* Image Container */}
      <Link href={`/products/${product.id}`} className="relative w-full bg-[#f6f6f6] overflow-hidden block aspect-[4/4.2]">
        <img
          alt={product.name}
          src={product.image}
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" 
        />
        {label && (
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            <span className={`${label.className} font-bold text-[10px] px-2 py-1 rounded-sm uppercase tracking-wide flex items-center gap-1`}>
              {label.text}
            </span>
          </div>
        )}
      </Link>

      {/* Product Info */}
      <div className="flex flex-col flex-1 pt-4 pb-2 gap-2 justify-between">
        <div className="flex flex-col gap-1.5">
          <h3 className="font-bold text-[18px] leading-snug text-black line-clamp-2">
            <Link href={`/products/${product.id}`} className="hover:underline">{product.name}</Link>
          </h3>
          <p className="text-[13px] text-[#666666] leading-tight line-clamp-3">
            {product.description}
          </p>
        </div>

        {/* Actions — always at bottom */}
        <div className="flex items-center justify-between mt-4">
          {product.inStock ? (
            <button className="bg-black text-white text-[13px] font-bold px-5 py-2.5 rounded-[8px] hover:bg-gray-800 transition-colors">
              Add to cart
            </button>
          ) : (
            <button disabled className="bg-[#d5d5d5] text-[#777777] text-[13px] font-bold px-5 py-2.5 rounded-[8px] cursor-not-allowed">
              Out of stock
            </button>
          )}
          <span className="font-black text-[22px] tracking-tight text-black flex items-center gap-1">
            {Math.floor(product.price)} <span className="font-extrabold text-[16px] -ml-0.5">€</span>
          </span>
        </div>
      </div>
    </div>
  );
}
