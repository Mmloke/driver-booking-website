import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <p className="text-sm font-semibold text-blue-200">من نحن</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">خدمة نقل مصممة بفهم عميق لراحة العميل.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1200&q=80"
              alt="فريق الخدمة"
              className="h-[430px] w-full rounded-[2rem] object-cover shadow-soft"
            />
          </div>
          <div className="flex flex-col justify-center">
            <span className="inline-flex w-fit rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-brand-blue">
              قيمنا
            </span>
            <h2 className="mt-5 text-3xl font-black text-slate-900">رحلات موثوقة، خدمة إنسانية، واهتمام بالتفاصيل.</h2>
            <p className="mt-5 text-lg leading-8 text-slate-600">
              نؤمن بأن السفر يجب أن يكون مريحًا ومرتبًا وذو إحساس شخصي. لذلك نركز على
              الجودة، الالتزام بالمواعيد، ومهنية السائقين لتقديم تجربة سفر سلسة.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {[
                ['+8', 'سنوات خبرة'],
                ['1500+', 'رحلة جاهزة'],
                ['96%', 'رضا العملاء'],
                ['24/7', 'دعم فوري']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="text-2xl font-black text-slate-900">{value}</div>
                  <div className="mt-1 text-sm text-slate-600">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-black text-slate-900 md:text-4xl">لماذا يختار العملاء خدمتنا؟</h2>
          </div>
          <div className="grid gap-6 md:grid-cols-3">
            {[
              ['التزام بالمواعيد', 'نستقبل الطلبات بدقة ونلتزم بجدول الرحلات دون تأخر.'],
              ['رحابة داخلية', 'سيارات نظيفة ومريحة مصممة للراحة أثناء الرحلة.'],
              ['تجربة شخصية', 'نصغي لاحتياجاتك ونعدل الخدمة وفق طلبك.']
            ].map(([title, text]) => (
              <div key={title} className="rounded-3xl border border-slate-200 bg-slate-50 p-6 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-100 text-xl text-brand-blue">★</div>
                <h3 className="text-xl font-bold text-slate-900">{title}</h3>
                <p className="mt-3 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
