import Link from 'next/link';

export function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-[#fafaf4]/85 dark:bg-stone-900/85 backdrop-blur-md">
      <div className="flex justify-between items-center px-8 py-6 w-full max-w-[1920px] mx-auto">
        <div className="flex items-center gap-12">
          <Link className="text-2xl font-black tracking-tighter text-[#153158] dark:text-white uppercase font-headline" href="/">ALPINE</Link>
          <div className="hidden md:flex gap-8 items-center">
            <Link className="font-headline tracking-tight text-sm font-semibold uppercase text-stone-600 dark:text-stone-400 hover:text-[#153158] dark:hover:text-white transition-colors" href="#">Everyday</Link>
            <Link className="font-headline tracking-tight text-sm font-semibold uppercase text-stone-600 dark:text-stone-400 hover:text-[#153158] dark:hover:text-white transition-colors" href="#">Hiking</Link>
            <Link className="font-headline tracking-tight text-sm font-semibold uppercase text-stone-600 dark:text-stone-400 hover:text-[#153158] dark:hover:text-white transition-colors" href="/products">Shop All Backpacks</Link>
          </div>
        </div>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-[#153158] dark:text-blue-200 hover:opacity-80 transition-opacity duration-200 scale-95 active:transition-transform duration-150">search</button>
          <button className="material-symbols-outlined text-[#153158] dark:text-blue-200 hover:opacity-80 transition-opacity duration-200 scale-95 active:transition-transform duration-150">shopping_bag</button>
          <button className="material-symbols-outlined text-[#153158] dark:text-blue-200 hover:opacity-80 transition-opacity duration-200 scale-95 active:transition-transform duration-150">person</button>
        </div>
      </div>
    </nav>
  );
}
