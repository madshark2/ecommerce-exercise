import Link from 'next/link';
import { ProductCard } from '@/components/ProductCard';
import { products } from '@/app/data/products';

export default function Home() {
  return (
    <main className="pt-24 flex-grow">
      {/* Hero Section: The Digital Topography */}
      <section className="relative h-[921px] w-full overflow-hidden px-8 pb-16">
        <div className="relative h-full w-full group">
          <img className="absolute inset-0 w-full h-full object-cover grayscale-[20%] group-hover:scale-105 transition-transform duration-[3000ms] ease-out" alt="Hero background" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA8dMUUGP4paXFukBjNwk9xKCp0MmVItLBwpGpkSguvFNBEojBObsWqvBJzEO4CoenTEY9tmq_MLUMX30B7lNxq4IOld6BtucMNlXumzUY4bC4wjoClzhnRb1_J1XW_juqOenFkka7Gad1H_4SXjtWLOj3BQ2D6sEaKWAH-URQMfrLteYAiL0p4KKuNbTNyxUqebM-RR0N6chF90SWFeWbd__OYJ1dTTE6XJ6MKjEGIDbsvwCHqwV_sryAoLTKsaMddkw-0HcOXgao-" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/60 to-transparent"></div>
          <div className="absolute inset-0 flex flex-col justify-end p-12 md:p-24 max-w-4xl">
            <span className="font-label text-white tracking-[0.2em] uppercase text-xs mb-4">Fall / Winter 2024</span>
            <h1 className="font-headline text-white text-6xl md:text-8xl font-black tracking-tighter leading-none mb-8">
              BUILT FOR THE <br />LONG HAUL.
            </h1>
            <div className="flex flex-wrap gap-4">
              <Link href="/products" className="bg-primary text-on-primary px-8 py-4 rounded-sm font-headline font-bold uppercase tracking-wider hover:opacity-90 transition-all flex items-center gap-2">
                Shop New Arrivals
                <span className="material-symbols-outlined">arrow_forward</span>
              </Link>
              <button className="bg-surface-container-lowest/20 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-sm font-headline font-bold uppercase tracking-wider hover:bg-white hover:text-primary transition-all">
                Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Shop by Category: Asymmetric Bento */}
      <section className="px-8 py-20 max-w-[1920px] mx-auto">
        <div className="flex justify-between items-end mb-16">
          <div>
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">FIELD EQUIPMENT</h2>
            <p className="font-body text-on-surface-variant mt-2 max-w-md">Purpose-built gear designed to withstand the harshest environments on Earth.</p>
          </div>
          <div className="hidden md:block">
            <Link className="font-label uppercase font-bold tracking-widest text-tertiary hover:underline underline-offset-8" href="/products">View All Gear</Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 h-[700px]">
          {/* Hiking */}
          <Link href="/products" className="md:col-span-2 relative group overflow-hidden bg-surface-container block">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Hiking category" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBanPqrkIYh4Zw3QvarZjvKA8f5F41IFwZpogewkA0hOIOaz3XkQ8h55DhjsalRUdIwEnCUyNZUWAgwKiAIwlPatkO529GGgmgMg1ctA8BLIqSII5rS0hmZ0Q9j3XrZ7BSFX8q9mB78pt11Z-xG5SGdFeJk2n9cJHlVGJN7t-4Bj_Z9xnw4Kt8GxLSfS152vTBKKccEolI3NHqlxTFsxj3YjayPrEehAlAs83rOiIIDFMusMPQyR5F3nsroVFH79IVNq3UIk9xBsNwe" />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-headline text-3xl font-bold text-white mb-2">Hiking</h3>
              <span className="font-label text-white/80 uppercase text-xs tracking-widest group-hover:text-white transition-colors flex items-center gap-2">Explore technical packs <span className="material-symbols-outlined text-sm">north_east</span></span>
            </div>
          </Link>
          {/* Everyday */}
          <Link href="/products" className="md:col-span-1 relative group overflow-hidden bg-surface-container-low block">
            <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Everyday category" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbu0G-RRhotyNUzmVXOSGVTYt7mhyxa-GZTADPcE1CgQ8qGQWeBh6AuoLI75ubryeUMC5wjxtR45teQq6dZqlSIimU-vX8rAQNzcbcgRz_IoUWr6ZWROsmrUnk0lrOnbQa8fAfK0OA_bqLGhWdPJPYYU5YICS-mcAgLNjgy8k87r0jQB7CoZFcYKSCCBe_cFLllvP51zS-tuHlOJ8yJxY-TVZaM-OpAqdNIJ3QJvBuqzCphyvsnt2td4rdN7srMu8s7TjJXiK7cZ0Z" />
            <div className="absolute inset-0 bg-black/10 group-hover:bg-black/30 transition-colors"></div>
            <div className="absolute bottom-8 left-8">
              <h3 className="font-headline text-2xl font-bold text-white mb-2">Everyday</h3>
              <span className="font-label text-white/80 uppercase text-xs tracking-widest">Commuter Essentials</span>
            </div>
          </Link>
          {/* Travel & Climbing Stack */}
          <div className="md:col-span-1 flex flex-col gap-4">
            <Link href="/products" className="h-1/2 relative group overflow-hidden bg-surface-container-highest block">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" alt="Travel category" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD9uUmDY0-h9vJ5lVT_Wg-BOgJDqP6uilO8pPBvsl_t_mBZsKAyydMw5QRQgUokJcPTtEJui3Jb4spL0qS7OAbiXZQZNO-Zue37d26DFvNUG66AANi36yZO0jA7ojfySTWgNauk4JkrMJEs7lpbSOiq2zNsuqIiOGWTrs4i3BKLKTV30G6brwST9hEvA6iQmRjCWLiR0772Av922AHt0TLzp17eWuLLXIx-MVIN8OYz4VRGrdL-hTKXNAa6DEu6Xp-Wd_uJ2yBFUR1B" />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"></div>
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-xl font-bold text-white mb-1">Travel</h3>
              </div>
            </Link>
            <Link href="/products" className="h-1/2 relative group overflow-hidden bg-primary block">
              <img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-70" alt="Climbing category" src="https://lh3.googleusercontent.com/aida-public/AB6AXuARiyu-iDw7c9am4BDpBzIwLzVcPTbSqzU1oZrtKpyY_suLeyqTpIMiYGmHx7Y9yBmU-0iSnIe9smvpyCIWKjOEhqi6j-Uemv_U5oNypuQ1xyT3wSHxJJFJPpG-vN_LeGr9K1YKfopqGZqFZ_-lmIHUZQTq99ivVq9XwtMF1QQtMIbU8ofeWbnxW_WbJGvp-Rpqfvua1HwfOgHKVrAPYsGCQGvDuQdR2L9vwHw-BzlS14g96CoOfd4QXjAPSGnZ1Yr1fqwm_LkDJf0V" />
              <div className="absolute bottom-6 left-6">
                <h3 className="font-headline text-xl font-bold text-white mb-1">Climbing</h3>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* All Products Section */}
      <section className="bg-surface-container-low py-24 px-8">
        <div className="max-w-[1920px] mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
            <h2 className="font-headline text-4xl font-extrabold tracking-tight text-primary">OUR PRODUCTS</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 p-4">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Mission: Editorial Storytelling */}
      <section className="py-32 px-8 overflow-hidden">
        <div className="max-w-[1920px] mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 items-center">
          <div className="md:col-span-5 order-2 md:order-1">
            <span className="font-label text-tertiary tracking-[0.3em] font-black uppercase text-xs mb-6 block">Our Mission</span>
            <h2 className="font-headline text-5xl md:text-7xl font-black text-primary tracking-tighter leading-[0.9] mb-10">
              WE&apos;RE IN BUSINESS TO SAVE OUR <br />HOME PLANET.
            </h2>
            <div className="space-y-8">
              <p className="font-body text-xl text-on-surface leading-relaxed max-w-lg">
                Sustainability isn&apos;t a buzzword for us—it&apos;s the bedrock of everything we build. From sourcing recycled materials to funding grassroots environmental activism, every stitch serves a purpose beyond the shelf.
              </p>
              <div className="flex flex-col gap-6">
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">eco</span>
                  <div>
                    <h4 className="font-headline font-bold text-primary">Ironclad Guarantee</h4>
                    <p className="font-body text-on-surface-variant">If your gear fails, we fix it. If it’s worn out, we recycle it. For life.</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="material-symbols-outlined text-primary text-3xl">build</span>
                  <div>
                    <h4 className="font-headline font-bold text-primary">The Repair Program</h4>
                    <p className="font-body text-on-surface-variant">Over 100,000 items repaired last year. Buying less is the ultimate environmental act.</p>
                  </div>
                </div>
              </div>
              <button className="mt-8 border-b-4 border-primary pb-2 font-headline font-black text-2xl text-primary hover:text-tertiary hover:border-tertiary transition-colors">
                READ THE 2024 REPORT
              </button>
            </div>
          </div>
          <div className="md:col-span-7 order-1 md:order-2 relative">
            <div className="relative z-10 aspect-[4/3] w-full overflow-hidden">
              <img className="w-full h-full object-cover" alt="close up of an industrial sewing machine" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBrAhtaYBhZNR5idBxWEg7aLbJwsRZ0JuAfk0OiDpuYo3Vyx2n2h9Sr6cWA7zCZGJtHGKIbECxCRX9DITsr6eNWD7IJkxU422liFfsIru8xBKJjZEq1-2iRenlSrdnALITH7mjZo67KJbZmTIu8i7TiCoh4D5dx08FMXJebvc0TCKhWpO1SQgY1aNeLNwrPg0acbAx-m0gzW2QUoIvp4R0de2m_0-VA99S6R0A6st91bEieiq284VBJrpYImWzmOoLqxvBt5UgmZUpV" />
            </div>
            {/* Decorative Element */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary-container -z-10 opacity-30"></div>
            <div className="absolute -bottom-10 -left-10 w-80 h-80 border-2 border-outline-variant -z-10"></div>
          </div>
        </div>
      </section>

      {/* Newsletter / Community */}
      <section className="bg-primary text-white py-24 px-8 text-center">
        <div className="max-w-2xl mx-auto">
          <span className="material-symbols-outlined text-5xl mb-6">mail</span>
          <h2 className="font-headline text-4xl font-bold mb-6">FIELD NOTES FROM THE FRONTLINE</h2>
          <p className="font-body text-blue-200 mb-10 text-lg">Join our community for environmental alerts, new gear drops, and stories from the wild.</p>
          <form className="flex flex-col md:flex-row gap-0 group">
            <input className="flex-grow bg-surface-container-highest/10 border-white/20 text-white placeholder:text-white/50 focus:bg-white focus:text-primary focus:ring-0 px-6 py-4" placeholder="Email Address" type="email" />
            <button type="button" className="bg-white text-primary px-8 py-4 font-headline font-black uppercase tracking-widest hover:bg-secondary-container transition-colors">Subscribe</button>
          </form>
        </div>
      </section>
    </main>
  );
}
