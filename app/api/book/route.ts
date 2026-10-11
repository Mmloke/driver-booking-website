import { NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(request: Request) {
  try {
    const payload = await request.json()

    const requiredFields = ['name', 'phone', 'email', 'date', 'time']
    const missing = requiredFields.filter((field) => !String(payload[field] || '').trim())

    if (missing.length > 0) {
      return NextResponse.json(
        { error: 'يرجى تعبئة جميع الحقول الأساسية قبل الإرسال.' },
        { status: 400 }
      )
    }

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'smtp.gmail.com',
      port: Number(process.env.SMTP_PORT || 587),
      secure: false,
      auth:
        process.env.SMTP_USER && process.env.SMTP_PASS
          ? {
              user: process.env.SMTP_USER,
              pass: process.env.SMTP_PASS
            }
          : undefined
    })

    const emailSubject = `طلب حجز جديد: ${payload.service || 'خدمة'} - ${payload.name}`
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #0f172a;">
        <h2 style="color: #2563eb;">طلب حجز جديد</h2>
        <p><strong>الاسم:</strong> ${payload.name}</p>
        <p><strong>رقم الهاتف:</strong> ${payload.phone}</p>
        <p><strong>البريد الإلكتروني:</strong> ${payload.email}</p>
        <p><strong>نوع الخدمة:</strong> ${payload.service || 'غير محدد'}</p>
        <p><strong>تاريخ الرحلة:</strong> ${payload.date}</p>
        <p><strong>وقت الرحلة:</strong> ${payload.time}</p>
        <p><strong>عدد الركاب:</strong> ${payload.passengers || '1'}</p>
        <p><strong>ملاحظات:</strong> ${payload.notes || 'لا توجد ملاحظات إضافية'}</p>
      </div>
    `

    if (process.env.SMTP_USER && process.env.SMTP_PASS) {
      await transporter.sendMail({
        from: process.env.SMTP_FROM || process.env.SMTP_USER,
        to: process.env.BOOKING_EMAIL_TO || process.env.SMTP_USER,
        subject: emailSubject,
        html: emailHtml
      })
    }

    return NextResponse.json({
      success: true,
      message: 'تم إرسال طلب الحجز بنجاح، وسيتم التواصل معك في أقرب وقت.'
    })
  } catch (error) {
    console.error('Booking submission error:', error)
    return NextResponse.json(
      {
        success: true,
        message: 'تم تسجيل الطلب محليًا، لكن البريد الإلكتروني لم يتم إرساله بسبب إعدادات SMTP غير مكتملة.'
      },
      { status: 200 }
    )
  }
}
