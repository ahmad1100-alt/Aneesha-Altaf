'use client'

import { useForm } from 'react-hook-form'
import { Instagram, Mail, MapPin, Send } from 'lucide-react'

type ContactFormValues = {
  name: string
  email: string
  inquiryType: string
  message: string
}

export function ContactSection() {
  const { register, handleSubmit, reset, formState: { errors } } = useForm<ContactFormValues>({
    defaultValues: {
      name: '',
      email: '',
      inquiryType: 'Brand Collaboration',
      message: '',
    },
  })
  const bookingEmail = process.env.NEXT_PUBLIC_BOOKING_EMAIL

  const onSubmit = (data: ContactFormValues) => {
    if (!bookingEmail) return

    const subject = encodeURIComponent(`${data.inquiryType} inquiry for Aneesha Altaf`)
    const body = encodeURIComponent([
      `Name: ${data.name}`,
      `Email: ${data.email}`,
      `Inquiry type: ${data.inquiryType}`,
      '',
      data.message,
    ].join('\n'))

    window.location.href = `mailto:${bookingEmail}?subject=${subject}&body=${body}`
    reset()
  }

  return (
    <section id="contact" className="py-24 bg-background" data-reveal>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="font-sans text-sm font-medium text-secondary uppercase mb-4">Contact / Booking</p>
          <h2 className="font-serif text-5xl text-foreground mb-6">Professional Inquiries</h2>
          <div className="w-12 h-1 bg-primary" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[0.85fr_1.15fr] gap-12 lg:gap-16">
          <div className="space-y-8">
            <p className="font-sans text-lg text-muted-foreground leading-relaxed">
              For casting, brand collaborations, editorial bookings, and business inquiries.
            </p>

            <div className="space-y-5">
              <div className="flex gap-4">
                <Mail className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-sans text-xs uppercase text-secondary font-semibold mb-1">Booking Email</p>
                  <p className="font-sans text-lg text-foreground">{bookingEmail || 'Available on Request'}</p>
                </div>
              </div>

              <div className="flex gap-4">
                <MapPin className="text-primary flex-shrink-0 mt-1" size={24} />
                <div>
                  <p className="font-sans text-xs uppercase text-secondary font-semibold mb-1">Base</p>
                  <p className="font-sans text-lg text-foreground">Pakistan</p>
                </div>
              </div>
            </div>

            <div className="pt-8 border-t border-border">
              <p className="font-sans text-xs uppercase text-secondary font-semibold mb-5">Public Profile</p>
              <a href="https://www.instagram.com/aneeshaaly_/" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 border border-border bg-card px-4 py-3 text-sm font-semibold text-foreground hover:border-primary hover:text-primary transition">
                <Instagram size={18} />
                @aneeshaaly_
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="bg-card border border-border p-6 sm:p-8 space-y-5">
            <div>
              <label htmlFor="name" className="block font-sans text-sm font-medium text-foreground mb-2">Full Name</label>
              <input
                id="name"
                type="text"
                className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="Your name"
                {...register('name', { required: true })}
              />
              {errors.name && <p className="mt-2 text-sm text-primary">Name is required.</p>}
            </div>

            <div>
              <label htmlFor="email" className="block font-sans text-sm font-medium text-foreground mb-2">Email Address</label>
              <input
                id="email"
                type="email"
                className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                placeholder="your@email.com"
                {...register('email', { required: true })}
              />
              {errors.email && <p className="mt-2 text-sm text-primary">Email is required.</p>}
            </div>

            <div>
              <label htmlFor="inquiryType" className="block font-sans text-sm font-medium text-foreground mb-2">Inquiry Type</label>
              <select
                id="inquiryType"
                className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition"
                {...register('inquiryType')}
              >
                <option>Brand Collaboration</option>
                <option>Casting / Screen Work</option>
                <option>Editorial Shoot</option>
                <option>Media Request</option>
                <option>Founder Venture Inquiry</option>
              </select>
            </div>

            <div>
              <label htmlFor="message" className="block font-sans text-sm font-medium text-foreground mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full px-4 py-3 bg-background border border-border font-sans text-foreground focus:outline-none focus:ring-2 focus:ring-primary transition resize-none"
                placeholder="Tell us more about your inquiry..."
                {...register('message', { required: true })}
              />
              {errors.message && <p className="mt-2 text-sm text-primary">Message is required.</p>}
            </div>

            <button
              type="submit"
              disabled={!bookingEmail}
              className="w-full inline-flex items-center justify-center gap-2 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition font-medium disabled:cursor-not-allowed disabled:bg-muted disabled:text-muted-foreground"
            >
              <Send size={18} />
              {bookingEmail ? 'Send Inquiry' : 'Contact Setup Pending Approval'}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
