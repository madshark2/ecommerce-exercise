import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-surface-container-low dark:bg-stone-900 w-full border-t border-outline-variant/20 mt-auto">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-16 px-12 py-20 w-full max-w-[1920px] mx-auto">
        <div className="md:col-span-1">
          <div className="text-xl font-bold text-primary dark:text-white mb-4 font-headline uppercase">Alpine</div>
          <p className="font-body leading-relaxed text-base text-stone-600 dark:text-stone-400">
            High-performance equipment designed for those who find solace in the high places. Committed to the preservation of our wild spaces.
          </p>
        </div>
        <div>
          <h4 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase tracking-widest text-sm">Company</h4>
          <ul className="space-y-4 font-body text-base">
            <li><Link className="text-stone-600 dark:text-stone-400 hover:underline decoration-tertiary underline-offset-4 transition-all duration-300 ease-in-out" href="#">Our Mission</Link></li>
            <li><Link className="text-stone-600 dark:text-stone-400 hover:underline decoration-tertiary underline-offset-4 transition-all duration-300 ease-in-out" href="#">Sustainability Report</Link></li>
            <li><Link className="text-stone-600 dark:text-stone-400 hover:underline decoration-tertiary underline-offset-4 transition-all duration-300 ease-in-out" href="#">Careers</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase tracking-widest text-sm">Support</h4>
          <ul className="space-y-4 font-body text-base">
            <li><Link className="text-stone-600 dark:text-stone-400 hover:underline decoration-tertiary underline-offset-4 transition-all duration-300 ease-in-out" href="#">Store Locator</Link></li>
            <li><Link className="text-stone-600 dark:text-stone-400 hover:underline decoration-tertiary underline-offset-4 transition-all duration-300 ease-in-out" href="#">Repair Program</Link></li>
            <li><Link className="text-stone-600 dark:text-stone-400 hover:underline decoration-tertiary underline-offset-4 transition-all duration-300 ease-in-out" href="#">Contact Us</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="font-headline font-bold text-primary dark:text-white mb-6 uppercase tracking-widest text-sm">Connect</h4>
          <div className="flex gap-4">
            <a className="w-10 h-10 rounded-sm bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-primary dark:text-white hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-xl">share</span>
            </a>
            <a className="w-10 h-10 rounded-sm bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-primary dark:text-white hover:bg-primary hover:text-white transition-all" href="#">
              <span className="material-symbols-outlined text-xl">public</span>
            </a>
          </div>
          <p className="mt-8 font-body text-stone-500 text-sm">© 2024 Alpine Editorial. Built for the long haul.</p>
        </div>
      </div>
    </footer>
  );
}
