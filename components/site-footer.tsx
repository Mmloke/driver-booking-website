import Link from 'next/link'

export default function SiteFooter() {
  return (
    <footer className="border-t border-slate-200 bg-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-6 py-12 md:grid-cols-3 md:px-10 lg:px-16">
        <div>
          <div className="flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-brand-blue text-base font-black text-white">S</div>
            <div>
              <div className="text-lg font-black text-slate-900">سائقك</div>
              <div className="text-[10px] uppercase tracking-[0.2em] text-slate-500">DriverCare</div>
            </div>
          </div>
          <p className="mt-4 max-w-sm text-slate-600">
            خدمات نقل مريحة وسريعة مع تجربة حجز مباشرة، ومهنية عالية، وتواصل واضح في كل خطوة.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-black text-slate-900">روابط سريعة</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li><Link href="/services">الخدمات</Link></li>
            <li><Link href="/book">احجز الآن</Link></li>
            <li><Link href="/about">من نحن</Link></li>
            <li><Link href="/faq">الأسئلة الشائعة</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-black text-slate-900">معلومات التواصل</h3>
          <ul className="mt-4 space-y-2 text-sm text-slate-600">
            <li>📞 +966 500 123 456</li>
            <li>✉️ hello@drivercare.com</li>
            <li>🕒 8:00 صباحاً — 11:00 مساءً</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-slate-200 bg-slate-50">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 text-sm text-slate-500 md:px-10 lg:px-16">
          <p>© 2025 سائقك. جميع الحقوق محفوظة.</p>
          <p>تم التطوير لتجربة سفر أنيقة وآمنة.</p>
        </div>
      </div>
    </footer>
  )
}
