import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import BookingForm from '@/components/booking-form'

export default function BookPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <p className="text-sm font-semibold text-blue-200">احجز رحلتك</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">املأ بيانات الرحلة وسنقوم بالتأكيد فورًا.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="mb-6">
              <p className="text-sm font-semibold text-brand-blue">الخطوة الأولى</p>
              <h2 className="mt-2 text-2xl font-black text-slate-900">بيانات الحجز</h2>
            </div>
            <BookingForm />
          </div>

          <aside className="space-y-6">
            <div className="rounded-[2rem] bg-slate-900 p-6 text-white shadow-soft">
              <h3 className="text-xl font-black">ماذا يتضمن الحجز؟</h3>
              <ul className="mt-5 space-y-4 text-slate-200">
                <li className="flex gap-3"><span className="mt-1 text-green-400">✓</span> تأكيد الحجز عبر البريد أو الهاتف</li>
                <li className="flex gap-3"><span className="mt-1 text-green-400">✓</span> اختيار الخدمة والوقت المناسب</li>
                <li className="flex gap-3"><span className="mt-1 text-green-400">✓</span> زر تأكيد سريع وبدون تعقيد</li>
              </ul>
            </div>

            <div className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black text-slate-900">تحتاج دعمًا سريعًا؟</h3>
              <p className="mt-4 text-slate-600">يمكنك التواصل معنا مباشرة عبر الهاتف أو البريد في أي وقت ��تعديل الحجز.</p>
              <div className="mt-5 space-y-3 text-sm text-slate-700">
                <p>📞 +966 500 123 456</p>
                <p>✉️ bookings@drivercare.com</p>
              </div>
            </div>
          </aside>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
