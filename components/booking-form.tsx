'use client'

import { FormEvent, useState } from 'react'

type BookingFormState = {
  name: string
  phone: string
  email: string
  date: string
  time: string
  passengers: string
  service: string
  notes: string
}

const initialState: BookingFormState = {
  name: '',
  phone: '',
  email: '',
  date: '',
  time: '',
  passengers: '1',
  service: 'نقل أفراد',
  notes: ''
}

export default function BookingForm() {
  const [form, setForm] = useState<BookingFormState>(initialState)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const updateField = (field: keyof BookingFormState, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    if (!form.name || !form.phone || !form.date || !form.time || !form.email) {
      setError('يرجى تعبئة جميع الحقول الأساسية قبل الإرسال.')
      setSuccess('')
      return
    }

    setIsSubmitting(true)
    setError('')

    try {
      const response = await fetch('/api/book', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(form)
      })

      const result = await response.json()

      if (!response.ok) {
        throw new Error(result?.error || 'حدث خطأ أثناء إرسال الحجز.')
      }

      setSuccess(result.message || 'تم إرسال طلب الحجز بنجاح.')
      setForm(initialState)
    } catch (submitError) {
      setError(submitError instanceof Error ? submitError.message : 'حدث خطأ غير متوقع.')
      setSuccess('')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">الاسم الكامل</label>
          <input
            value={form.name}
            onChange={(e) => updateField('name', e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
            placeholder="اسمك الكامل"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">رقم الهاتف</label>
          <input
            value={form.phone}
            onChange={(e) => updateField('phone', e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
            placeholder="05xxxxxxxx"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">البريد الإلكتروني</label>
          <input
            type="email"
            value={form.email}
            onChange={(e) => updateField('email', e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
            placeholder="example@email.com"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">نوع الخدمة</label>
          <select
            value={form.service}
            onChange={(e) => updateField('service', e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
          >
            <option>نقل أفراد</option>
            <option>رحلات الأعمال</option>
            <option>رحلات العائلة</option>
            <option>النقل إلى المطار</option>
          </select>
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">تاريخ الرحلة</label>
          <input
            type="date"
            value={form.date}
            onChange={(e) => updateField('date', e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-semibold text-slate-700">الوقت</label>
          <input
            type="time"
            value={form.time}
            onChange={(e) => updateField('time', e.target.value)}
            className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
          />
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">عدد الركاب</label>
        <select
          value={form.passengers}
          onChange={(e) => updateField('passengers', e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
        >
          <option value="1">1 راكب</option>
          <option value="2">2 راكب</option>
          <option value="3">3 ركاب</option>
          <option value="4">4 ركاب</option>
          <option value="5+">5 ركاب أو أكثر</option>
        </select>
      </div>

      <div>
        <label className="mb-2 block text-sm font-semibold text-slate-700">ملاحظات إضافية</label>
        <textarea
          rows={4}
          value={form.notes}
          onChange={(e) => updateField('notes', e.target.value)}
          className="w-full rounded-xl border border-slate-200 bg-slate-50 px-4 py-3 outline-none transition focus:border-brand-blue"
          placeholder="اكتب أي تفاصيل إضافية أو متطلبات خاصة..."
        />
      </div>

      {error ? <p className="rounded-xl border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">{error}</p> : null}
      {success ? <p className="rounded-xl border border-green-200 bg-green-50 px-4 py-3 text-sm text-green-700">{success}</p> : null}

      <button
        type="submit"
        disabled={isSubmitting}
        className="inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-blue-600 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {isSubmitting ? 'جاري إرسال الطلب...' : 'تأكيد الحجز'}
      </button>
    </form>
  )
}
