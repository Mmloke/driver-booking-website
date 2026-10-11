import Link from 'next/link'

export default function ServicesPage() {
  const serviceCards = [
    {
      title: 'نقل أفراد',
      subtitle: 'رحلات شخصية داخل المدينة',
      description: 'خدمة سريعة ومريحة للرحلات اليومية أو الترفيهية، م�� سائقين مدربين على التعامل مع احتياجات الزبائن.',
      features: ['توصيل من الباب إلى الباب', 'تنظيم مواعيد مرن', 'سيارات نظيفة ومريحة'],
      price: 'من 200 جنيه'
    },
    {
      title: 'رحلات الأعمال',
      subtitle: 'لمؤسساتك وموظفيك',
      description: 'خدمة احترافية تناسب الاجتماعات والزيارات والمواعيد المؤسسية مع توجه دقيق للوقت.',
      features: ['حضور في الوقت المحدد', 'سائقون محترفون', 'تأكيدات دقيقة عبر الرسائل'],
      price: 'من 350 جنيه'
    },
    {
      title: 'رحلات العائلة',
      subtitle: 'راحة وأمان للرحلات العائلية',
      description: 'نقدم سيارات واسعة ومريحة مع خدمة مناسبة للأسر والرحلات الطويلة وتجمعات العائلة.',
      features: ['مساحة كافية لعدد أكبر', 'خدمة مرنة', 'عناية خاصة بالأطفال'],
      price: 'من 450 جنيه'
    },
    {
      title: 'النقل إلى المطار',
      subtitle: 'رحلات بالوقت المناسب',
      description: 'خدمة دقيقة للتحضير للمطار مع متابعة وقت الوصول وتأكيد التوقيت لضمان تجربة خالية من التوتر.',
      features: ['مراقبة الوقت', 'استلام من المنزل', 'قيمة توقع دقيقة'],
      price: 'من 280 جنيه'
    }
  ]

  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <p className="text-sm font-semibold text-blue-200">خدماتنا</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">حلول نقل مصممة لأسلوب حياتك.</h1>
          <p className="mt-4 max-w-2xl text-lg text-slate-300">
            نقدم خدمات نقل مرنة ومريحة تناسب الرحلات اليومية، احتياجات الشركات، والرحلات العائلية.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-16 md:px-10 lg:px-16">
        <div className="grid gap-8 md:grid-cols-2">
          {serviceCards.map((service) => (
            <article key={service.title} className="rounded-[2rem] border border-slate-200 bg-white p-6 shadow-sm">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-sm font-semibold text-brand-blue">{service.subtitle}</p>
                  <h2 className="mt-2 text-2xl font-black text-slate-900">{service.title}</h2>
                </div>
                <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-bold text-brand-blue">{service.price}</span>
              </div>

              <p className="mt-5 text-slate-600">{service.description}</p>

              <ul className="mt-6 space-y-3">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-slate-700">
                    <span className="flex h-6 w-6 items-center justify-center rounded-full bg-green-100 text-green-700">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <Link href="/book" className="mt-8 inline-flex rounded-full bg-brand-blue px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
                احجز هذه الخدمة
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <div className="grid gap-8 rounded-[2rem] border border-slate-200 bg-slate-50 p-8 md:grid-cols-3">
            {[
              ['سائقون مدربون', 'فريق محترف ومهذب مع خبرة في التنقل داخل المدينة'],
              ['خدمة بدعم مستمر', 'متاح دعم مباشر طوال اليوم لتنسيق الرحلات'],
              ['أسعار شفافة', 'بدون رسوم مخفية أو تغييرات غير متوقعة']
            ].map(([title, text]) => (
              <div key={title} className="rounded-2xl bg-white p-5 shadow-sm">
                <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-xl text-brand-blue">✓</div>
                <h3 className="text-lg font-bold text-slate-900">{title}</h3>
                <p className="mt-2 text-slate-600">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
