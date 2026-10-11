import Link from 'next/link'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const faqs = [
  {
    question: 'هل يمكن تعديل موعد الحجز بعد تأكيده؟',
    answer: 'نعم، في معظم الحالات يمكن تعديل الموعد إذا كانت الطلبية لا تزال قيد التنفيذ. يمكن التواصل مباشرة مع فريق الدعم لإجراء التعديل.'
  },
  {
    question: 'هل توجد رسوم إضافية؟',
    answer: 'الأسعار يتم عرضها بشكل واضح قبل الحجز، ولا توجد رسوم خفية. قد تضاف بعض الخدمات الإضافية في حال طلبها صراحةً.'
  },
  {
    question: 'هل يمكن حجز رحلة لعدد أكبر من الركاب؟',
    answer: 'بالتأكيد، نقدم خدمات مناسبة للرحلات العائلية أو المجموعات الكبيرة مع سيارات ذات مساحة كافية.'
  },
  {
    question: 'ما هي المدة الزمنية لتأكيد الحجز؟',
    answer: 'عادةً يتم تأكيد الحجز في دقائق قليلة خلال ساعات العمل، وقد يتم التواصل عبر الهاتف أو البريد في حالة الحاجة.'
  }
]

export default function FAQPage() {
  return (
    <main className="min-h-screen bg-slate-50 text-slate-800">
      <SiteHeader />

      <section className="bg-slate-950 py-16 text-white">
        <div className="mx-auto max-w-7xl px-6 md:px-10 lg:px-16">
          <p className="text-sm font-semibold text-blue-200">الأسئلة الشائعة</p>
          <h1 className="mt-3 text-4xl font-black md:text-5xl">إجابات سريعة حول خدماتنا.</h1>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:px-10 lg:px-16">
        <div className="space-y-5">
          {faqs.map((item) => (
            <div key={item.question} className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900">{item.question}</h2>
              <p className="mt-3 text-slate-600 leading-7">{item.answer}</p>
            </div>
          ))}
        </div>

        <div className="mt-10 rounded-[2rem] bg-slate-900 p-8 text-center text-white shadow-soft">
          <h3 className="text-2xl font-black">لا تزال لديك أسئلة؟</h3>
          <p className="mt-3 text-slate-300">يمكننا مساعدتك مباشرة عبر التواصل مع فريق الدعم.</p>
          <Link href="/contact" className="mt-6 inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600">
            تواصل معنا
          </Link>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
