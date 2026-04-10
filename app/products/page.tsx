import Link from 'next/link';
import { products } from '@/app/data/products';
import { ProductCard } from '@/components/ProductCard';

export default function ProductsPage() {
  return (
    <main className="pt-32 pb-20 px-8 max-w-[1920px] mx-auto flex-grow w-full">
      {/* Hero Header */}
      <header className="mb-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-end">
          <div className="md:col-span-8">
            <h1 className="text-6xl md:text-8xl font-black tracking-tighter text-primary uppercase leading-[0.9]">
              Technical<br />Packs.
            </h1>
            <p className="mt-8 text-lg text-on-surface-variant max-w-xl leading-relaxed">
              Engineered for the vertical, the trail, and the long haul. Our Patagonia collection represents the pinnacle of sustainable utility and rugged durability.
            </p>
          </div>
          <div className="md:col-span-4 flex justify-end">
            <div className="text-right">
              <span className="font-label uppercase tracking-widest font-semibold text-tertiary">Spring 2024</span>
              <div className="text-2xl font-bold mt-2">{products.length} Items Filtered</div>
            </div>
          </div>
        </div>
      </header>

      {/* Product Grid Layout */}
      <div className="flex flex-col md:flex-row gap-12">
        {/* Filters Sidebar */}
        <aside className="w-full md:w-64 flex-shrink-0 space-y-12">
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-2">Category</h3>
            <ul className="space-y-4 font-body text-sm">
              <li className="flex items-center justify-between text-on-surface hover:text-primary cursor-pointer transition-colors">
                <span>Everyday</span>
                <span className="text-xs opacity-50">04</span>
              </li>
              <li className="flex items-center justify-between font-bold text-primary cursor-pointer transition-colors">
                <span>Hiking</span>
                <span className="text-xs opacity-50">03</span>
              </li>
              <li className="flex items-center justify-between text-on-surface hover:text-primary cursor-pointer transition-colors">
                <span>Trail Running</span>
                <span className="text-xs opacity-50">02</span>
              </li>
              <li className="flex items-center justify-between text-on-surface hover:text-primary cursor-pointer transition-colors">
                <span>Climbing</span>
                <span className="text-xs opacity-50">01</span>
              </li>
              <li className="flex items-center justify-between text-on-surface hover:text-primary cursor-pointer transition-colors">
                <span>Travel</span>
                <span className="text-xs opacity-50">02</span>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-2">Volume (Liters)</h3>
            <div className="grid grid-cols-2 gap-2">
              <button className="py-2 px-3 text-xs font-bold border border-outline-variant/40 hover:bg-primary hover:text-white transition-all">18L - 25L</button>
              <button className="py-2 px-3 text-xs font-bold border border-outline-variant/40 hover:bg-primary hover:text-white transition-all">26L - 32L</button>
              <button className="py-2 px-3 text-xs font-bold border border-outline-variant/40 hover:bg-primary hover:text-white transition-all bg-primary text-white">33L - 40L</button>
              <button className="py-2 px-3 text-xs font-bold border border-outline-variant/40 hover:bg-primary hover:text-white transition-all">40L+</button>
            </div>
          </div>
          <div>
            <h3 className="font-headline text-sm font-bold uppercase tracking-widest mb-6 border-b border-outline-variant/20 pb-2">Price Range</h3>
            <div className="space-y-4">
              <input readOnly className="w-full h-1 bg-surface-container-highest appearance-none cursor-pointer accent-primary" max="500" min="50" type="range" value="500" />
              <div className="flex justify-between text-xs font-bold opacity-60">
                <span>$50</span>
                <span>$500</span>
              </div>
            </div>
          </div>
          <div className="pt-8">
            <img alt="Environmental contextual shot" className="w-full h-64 object-cover grayscale contrast-125 mb-4" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtbwvDT-mbDMdJLNzssH54P95MtlNgqCoXSP-hKB70TM1vjSE03joMbpA476MP0ur7y93uMVdpluYwWmUse4HK28Yc0C7m_nZLhtN5QBy40dJbBpvv2gTaAn1A47sGlsL-5dyL49Rt7Br67NfYDVFW2Y6m66n1MAlJM4YbbFEQvnXsbQC3dDOtFD9LCuyOqlEV6ued-e2Jk3NEKOTtM4eNq4dc10d7aauuqgprqORkrEg6Qpkn4z4z3-rRLWlo5EHTzjZHuDMkaSAa" />
            <p className="text-[10px] uppercase tracking-[0.2em] font-bold text-on-surface-variant leading-relaxed">
              Every purchase contributes to our 1% for the Planet commitment.
            </p>
          </div>
        </aside>

        {/* Main Listing Grid */}
        <div className="flex-grow">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
            {products.map((product) => (
              <ProductCard key={product.id} product={product} variant="listing" />
            ))}
          </div>

          {/* Pagination/Load More */}
          <div className="mt-20 flex justify-center">
            <button className="px-12 py-4 border border-primary text-primary font-headline text-sm font-bold uppercase tracking-[0.2em] hover:bg-primary hover:text-white transition-all duration-300">
              Load More Gear
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
