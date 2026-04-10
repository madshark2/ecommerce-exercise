import { products } from '@/app/data/products';
import { notFound } from 'next/navigation';
export default async function ProductDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const product = products.find((p) => p.id === parseInt(id));

  if (!product) {
    notFound();
  }

  return (
    <main className="pt-24 pb-20 flex-grow">
      {/* Hero Section / Product Top */}
      <section className="max-w-[1920px] mx-auto px-8 md:px-12 grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-20 items-start mt-10 md:mt-20">
        {/* Asymmetric Image Layout */}
        <div className="lg:col-span-7 relative group">
          <div className="aspect-[4/5] bg-surface-container overflow-hidden">
            <img alt={product.name} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={product.image}/>
          </div>
          {/* Spec Tags Overlay */}
          <div className="absolute top-6 left-6 flex flex-col gap-2">
            <span className="bg-tertiary-fixed text-on-tertiary-fixed-variant px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">RECYCLED POLYESTER</span>
            {product.label && <span className="bg-secondary-container text-on-secondary-container px-3 py-1 text-[10px] font-bold tracking-widest uppercase rounded-sm">{product.label.replace('_', ' ')}</span>}
          </div>
        </div>

        {/* Product Info Sticky */}
        <div className="lg:col-span-5 lg:sticky lg:top-32">
          <div className="mb-4">
            <span className="text-xs font-bold tracking-widest text-on-surface-variant uppercase font-label">GEAR / Bags & Packs</span>
          </div>
          <h1 className="text-5xl md:text-6xl font-black tracking-tighter text-primary leading-[0.9] mb-4 uppercase">{product.name}</h1>
          <div className="flex items-baseline gap-4 mb-10">
            <span className="text-3xl font-bold text-primary">{product.price.toFixed(2)} €</span>
            <span className="text-sm text-on-surface-variant font-medium">Or 4 payments of {(product.price / 4).toFixed(2)} €</span>
          </div>

          {/* Color Selection */}
          <div className="mb-8">
            <p className="text-[10px] font-bold tracking-widest uppercase mb-3 text-on-surface-variant">Color: Obsidian Black</p>
            <div className="flex gap-3">
              <button className="w-8 h-8 rounded-full bg-stone-900 ring-2 ring-primary ring-offset-2"></button>
              <button className="w-8 h-8 rounded-full bg-blue-900 ring-1 ring-outline-variant hover:ring-primary transition-all"></button>
              <button className="w-8 h-8 rounded-full bg-emerald-900 ring-1 ring-outline-variant hover:ring-primary transition-all"></button>
            </div>
          </div>

          {/* Size Selection */}
          <div className="mb-10">
            <div className="flex justify-between mb-3">
              <p className="text-[10px] font-bold tracking-widest uppercase text-on-surface-variant">Size</p>
              <button className="text-[10px] font-bold tracking-widest uppercase text-tertiary hover:underline">Size Guide</button>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <button className="py-4 border-2 border-primary text-sm font-bold uppercase bg-surface-container-lowest text-primary">O/S</button>
              <button disabled className="py-4 border border-outline-variant/30 text-outline-variant text-sm font-bold uppercase transition-colors bg-surface-container/30 cursor-not-allowed">Custom</button>
            </div>
          </div>

          {/* Actions */}
          <div className="flex flex-col gap-4">
            <button className="w-full bg-primary text-on-primary py-6 text-sm font-bold uppercase tracking-widest rounded-sm hover:opacity-90 active:scale-[0.98] transition-all">
                Add to Cart
            </button>
            <button className="w-full border border-outline-variant py-4 text-[10px] font-bold uppercase tracking-widest rounded-sm hover:bg-surface-container transition-all flex items-center justify-center gap-2">
                <span className="material-symbols-outlined text-sm">favorite</span>
                Save to Wishlist
            </button>
          </div>

          {/* Short Value Prop */}
          <div className="mt-12 pt-12 border-t border-outline-variant/20 grid grid-cols-3 gap-4 text-center">
            <div>
              <span className="material-symbols-outlined text-primary mb-2">potted_plant</span>
              <p className="text-[10px] font-bold uppercase leading-tight">Fair Trade Certified</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">recycling</span>
              <p className="text-[10px] font-bold uppercase leading-tight">100% Recycled Fabric</p>
            </div>
            <div>
              <span className="material-symbols-outlined text-primary mb-2">verified</span>
              <p className="text-[10px] font-bold uppercase leading-tight">Repairable for Life</p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Story / Details */}
      <section className="mt-32 md:mt-48 px-8 md:px-12 max-w-[1920px] mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 items-start">
          <div className="md:col-span-5">
            <h2 className="text-4xl font-bold tracking-tighter text-primary mb-10 uppercase leading-none">Built for the <br/> Long Haul.</h2>
            <div className="space-y-6 text-lg leading-relaxed text-on-surface-variant font-body max-w-md">
              <p>{product.description}</p>
              <p>Crafted from a weather-resistant TPU-film laminate and 100% recycled polyester, this pack thrives in chaotic commutes and unpredictable mountain conditions alike. Its spacious main compartment and easy-access stash pockets keep your gear organized while the padded laptop sleeve handles tech with care.</p>
            </div>
          </div>
          <div className="md:col-span-7 bg-surface-container-low p-10 md:p-20">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-12">
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 border-b border-outline-variant/30 pb-2">Technical Specs</h3>
                <ul className="space-y-4 text-sm font-medium">
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Weight</span>
                    <span>810 g (1 lb 12.6 oz)</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Dimensions</span>
                    <span>22&quot; x 10.5&quot; x 6.75&quot;</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Material</span>
                    <span>8.7-oz 300-denier ripstop</span>
                  </li>
                  <li className="flex justify-between border-b border-outline-variant/10 pb-2">
                    <span className="text-on-surface-variant">Lining</span>
                    <span>3-oz 200-denier recycled poly</span>
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xs font-bold tracking-[0.2em] uppercase text-primary mb-6 border-b border-outline-variant/30 pb-2">Features</h3>
                <ul className="space-y-3 text-sm text-on-surface-variant">
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    Heavy-duty daisy chain for lashing
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    Padded 15&quot; laptop sleeve
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    Highly breathable back panel
                  </li>
                  <li className="flex gap-3">
                    <span className="material-symbols-outlined text-xs text-primary mt-0.5">check_circle</span>
                    Large stretch water-bottle pockets
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Secondary Imagery Section */}
      <section className="mt-20 md:mt-32 px-8 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-4 h-[600px] overflow-hidden">
        <div className="h-full bg-surface-container">
          <img alt="Technical Detail" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC-sbneLzuVTZLhwdnX_ilpMxbaXNiPYmeQLKb69WX0vuWns36Yd0KNwWVB8DfUj-OKHlu9auESFENhvwZUMhZfyC8JIb1soglo4-yIpGJU6jhLNLXT4s3LripNfw1Cf_a3rH7wpxO7ivVM63czcbGkSc65ZP25Ow5jVaVcMAavgVh1lx0qo4XPppHSzCTfG8GIid2E2Eo1M-FIoYY8DvLIw_KvwNDDuvhs6QMnjVA9sofop0iop3QRMBAUTcfd4hga_gppSuH1KXrm"/>
        </div>
        <div className="h-full bg-surface-container relative">
          <img alt="In Action" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-hfckakKrzy8xmZ9EMNexO7cxa24-e2iVUHzXitt58E0cPlQn0TXwsRY-1R568zdOFJbCxyIILL94ANXGZPuTA-hwtaoglWCV-7ZZR_gnl4rq7QDb5zuAJmZBbOdiSrVdAOz1UT2VrsV5ve9HkNEIV_bNQHij1azpuEkOFYdR9BM0ZScfX2dcr4K5Vy2RPP7YWUurpXAcTbl7d-DVdD8l9b3Uj_08FHbCwuT9DP8GBFvhpLP3NorpLE1wKBa2BELiYZ3yqRua7avl"/>
          <div className="absolute inset-0 flex items-center justify-center p-12 text-center text-white bg-black/30">
            <div className="max-w-xs">
              <span className="material-symbols-outlined text-4xl mb-4" style={{ fontVariationSettings: "'FILL' 1" }}>shield</span>
              <h4 className="text-2xl font-bold uppercase tracking-tighter mb-4">Repairable for Life</h4>
              <p className="text-sm font-medium leading-relaxed">Our gear is meant to be used. If it breaks, we&apos;ll fix it. It&apos;s that simple. Join our repair program and keep gear in play longer.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
