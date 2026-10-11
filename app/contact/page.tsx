import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <p className="text-sm font-semibold text-blue-200">تواصل معنا</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">نحن هنا للإجابة عن كل استفسار.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr]">
          <div className="rounded-[2rem] bg-slate-900 p-8 text-white shadow-soft">
            <h2 className="text-2xl font-black">معلومات التواصل</h2>
            <div className="mt-8 space-y-6 text-slate-200">
              <p>📍 العنوان: المدينة، شارع القيادة، مبنى 12</p>
              <p>📞 الهاتف: +966 500 123 456</p>
              <p>✉️ البريد: hello@drivercare.com</p>
              <p>🕒 ساعات العمل: من 8:00 صباحًا إلى 11:00 مساءً</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm md:p-8">
            <div className="grid gap-5 md:grid-cols-2">
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">الاسم</label>
                <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue" placeholder="اكتب اسمك" />
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">البريد الإلكتروني</label>
                <input type="email" className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue" placeholder="example@email.com" />
              </div>
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">موضوع الرسالة</label>
              <input className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue" placeholder="موضوع الرسالة" />
            </div>

            <div className="mt-5">
              <label className="mb-2 block text-sm font-semibold text-slate-700">الرسالة</label>
              <textarea rows={5} className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue" placeholder="اكتب رسالتك هنا..." />
            </div>

            <button type="submit" className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
              إرسال الرسالة
            </button>
          </form>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
