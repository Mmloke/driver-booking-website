import Link from 'next/link'

const navItems = [
  { href: '/', label: 'الرئيسية' },
  { href: '/services', label: 'الخدمات' },
  { href: '/book', label: 'احجز الآن' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'اتصل بنا' },
  { href: '/faq', label: 'الأسئلة الشائعة' }
]

export default function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 md:px-10 lg:px-16">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-blue text-lg font-black text-white shadow-soft">
            S
          </div>
          <div>
            <div className="text-lg font-black text-slate-900">سائقك</div>
            <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">DriverCare</div>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="text-sm font-medium text-slate-700 transition hover:text-brand-blue">
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Link href="/contact" className="hidden rounded-full border border-slate-200 px-4 py-2 text-sm font-semibold text-slate-700 md:inline-flex">
            تواصل
          </Link>
          <Link href="/book" className="inline-flex rounded-full bg-brand-blue px-5 py-2.5 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-600">
            احجز الآن
          </Link>
        </div>
      </div>
    </header>
  )
}
