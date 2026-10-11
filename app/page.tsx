import { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'الرئيسية',
  description: 'صفحة البداية لموقع خدمات السائقين وحجز الرحلات المباشر.'
}

export default function HomePage() {
  return (
    <main className="bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="relative overflow-hidden bg-slate-950 text-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(37,99,235,0.35),_transparent_35%),radial-gradient(circle_at_bottom_right,_rgba(16,185,129,0.22),_transparent_30%)]" />
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-20 md:grid-cols-2 md:px-10 lg:px-16">
          <div className="relative">
            <span className="inline-flex rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-medium text-blue-100 backdrop-blur-sm">
              رحلات موثوقة • خدمة شخصية • احترافية كاملة
            </span>
            <h1 className="mt-6 text-4xl font-black leading-tight md:text-5xl lg:text-6xl">
              تجربة سفر أنيقة وموثوقة من الباب إلى الباب.
            </h1>
            <p className="mt-6 max-w-xl text-lg text-slate-200">
              خدمة سائقين متخصصة، سيارات نظيفة ومريحة، وحجز مباشر بأسلوب سريع وبسيط
              لكل رحلة عمل أو عائلة أو نقل خاص.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link href="/book" className="rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-600">
                احجز الآن
              </Link>
              <Link href="/services" className="rounded-full border border-white/20 bg-white/5 px-6 py-3 text-sm font-semibold text-white transition hover:bg-white/10">
                اكتشف الخدمات
              </Link>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4 text-center">
              {[
                ['4.9/5', 'تقييم العملاء'],
                ['1200+', 'رحلة ناجحة'],
                ['24/7', 'دعم مباشر']
              ].map(([value, label]) => (
                <div key={label} className="rounded-2xl border border-white/10 bg-white/5 p-4 backdrop-blur-sm">
                  <div className="text-2xl font-black text-white">{value}</div>
                  <div className="mt-1 text-xs text-slate-300">{label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-3 shadow-soft backdrop-blur-sm">
              <img
                src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=900&q=80"
                alt="سائق يقود السيارة"
                className="h-[520px] w-full rounded-[1.5rem] object-cover"
              />
            </div>
            <div className="absolute -bottom-6 left-5 rounded-2xl border border-slate-200 bg-white p-4 shadow-lg">
              <div className="flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100 text-xl">✓</div>
                <div>
                  <p className="text-sm text-slate-500">الحجز المؤكد</p>
                  <p className="font-bold text-slate-800">موعدك تم تأكيده</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-brand-blue">
            لماذا نحن
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-4xl">
            خدمات مصممة لرحلاتك اليومية والعملاء المميزين.
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'سائقين محترفين',
              description: 'فريق مدرب للتعامل مع الرحلات الشخصية والعمل، مع التركيز على الراحة والأمان.',
              icon: '���'
            },
            {
              title: 'حجز فوري',
              description: 'نظام حجز مباشر يسهل اختيار اليوم والوقت وعدد الركاب وتأكيد الطلب في دقائق.',
              icon: '⚡'
            },
            {
              title: 'شفافية كاملة',
              description: 'أسعار واضحة، تغطية مناسبة، ورسائل تأكيد تلقائية للتواصل السلس.',
              icon: '🛡️'
            }
          ].map((item) => (
            <div key={item.title} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-soft">
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-3xl">{item.icon}</div>
              <h3 className="text-xl font-bold text-slate-900">{item.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{item.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="mb-10 flex items-end justify-between gap-4">
            <div>
              <span className="inline-block rounded-full bg-green-100 px-4 py-2 text-sm font-semibold text-green-700">
                خدماتنا
              </span>
              <h2 className="mt-4 text-3xl font-black text-slate-900 md:text-4xl">
                اختر الخدمة المناسبة لك.
              </h2>
            </div>
            <Link href="/services" className="hidden text-sm font-semibold text-brand-blue md:inline-flex">
              عرض جميع الخدمات →
            </Link>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                name: 'نقل أفراد',
                text: 'رحلات شخصية داخل المدينة أو بين المدن مع سائقين محترفين ومرونة في المواعيد.',
                price: 'من 200 جنيه',
                image: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=80'
              },
              {
                name: 'رحلات أعمال',
                text: 'خدمة مناسبة للمديرين والضيوف والزيارات المؤسسية مع أسلوب احترافي.',
                price: 'من 350 جنيه',
                image: 'https://images.unsplash.com/photo-1493238792000-8113da705763?auto=format&fit=crop&w=900&q=80'
              },
              {
                name: 'رحلات عائلية',
                text: 'سيارات واسعة ومريحة للرحلات العائلية والرحلات الطويلة بفضل الترتيب المريح.',
                price: 'من 450 جنيه',
                image: 'https://images.unsplash.com/photo-1511919884226-fd3cad34687c?auto=format&fit=crop&w=900&q=80'
              }
            ].map((service) => (
              <article key={service.name} className="overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 shadow-sm">
                <img src={service.image} alt={service.name} className="h-52 w-full object-cover" />
                <div className="p-6">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-bold text-slate-900">{service.name}</h3>
                    <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-bold text-brand-blue">
                      {service.price}
                    </span>
                  </div>
                  <p className="mt-4 text-slate-600">{service.text}</p>
                  <Link href="/book" className="mt-5 inline-flex rounded-full bg-slate-900 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-700">
                    احجز الخدمة
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-900 py-20 text-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-6 md:grid-cols-2 md:px-10 lg:grid-cols-3 lg:px-16">
          <div className="lg:col-span-2">
            <span className="inline-flex rounded-full bg-white/10 px-4 py-2 text-sm font-semibold text-blue-100">
              شريحة الحجز
            </span>
            <h2 className="mt-5 text-3xl font-black md:text-4xl">
              اختر موعدك واسمح لنا بتنسيق رحلتك بدقة.
            </h2>
          </div>
          <div className="flex items-center justify-end">
            <Link href="/book" className="inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white shadow-soft transition hover:bg-blue-600">
              احجز الآن
            </Link>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-20 md:px-10 lg:px-16">
        <div className="mb-10 text-center">
          <span className="inline-block rounded-full bg-amber-100 px-4 py-2 text-sm font-semibold text-amber-700">
            شهادات العملاء
          </span>
          <h2 className="mt-5 text-3xl font-black text-slate-900 md:text-4xl">
            ما يقوله عملاؤنا عنا
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {[
            'الخدمة كانت ممتازة من البداية إلى النهاية، وسائقنا كان مهذبًا جدًا ومنظمًا.',
            'موقع الحجز سهل وب��يط، وتم تأكيد الرحلة بسرعة وبدون أي تعقيد.',
            'الراحة والوضوح في السعر أعجبني، وأنا أستعمل الخدمة في جميع زياراتي داخل المدينة.'
          ].map((quote, index) => (
            <blockquote key={quote} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <div className="mb-4 flex text-amber-400">{'★'.repeat(5)}</div>
              <p className="text-slate-700">“{quote}”</p>
              <footer className="mt-5 text-sm font-bold text-slate-900">
                {['أحمد س.', 'سارة م.', 'مصطفى ج.'][index]}
              </footer>
            </blockquote>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
