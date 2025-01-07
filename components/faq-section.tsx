'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes, you can cancel your subscription at any time."
  },
  {
    question: "What should I bring?",
    answer: "Please bring comfortable clothing and socks. We provide all equipment."
  },
  {
    question: "How often should I practice?",
    answer: "We recommend 2-3 sessions per week for optimal results."
  },
  {
    question: "What should I bring when I come?",
    answer: "Bring comfortable workout clothes and clean socks."
  },
  {
    question: "What is included in the packages?",
    answer: "All packages include access to equipment and instructor guidance."
  },
  {
    question: "Where can I find class schedules?",
    answer: "Class schedules are available on our website and mobile app."
  },
  {
    question: "How long is each class?",
    answer: "Classes are typically 50 minutes long."
  },
  {
    question: "What is your cancellation policy?",
    answer: "Please cancel at least 24 hours before your scheduled class."
  },
  {
    question: "Is it possible to change the schedule?",
    answer: "Yes, you can reschedule classes through our booking system."
  }
]

export function FaqSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-bold text-primary mb-8">FAQ</h2>
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border rounded-lg">
                <button
                  className="flex justify-between items-center w-full px-4 py-2 text-left"
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5" />
                  ) : (
                    <ChevronDown className="w-5 h-5" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-4 pb-2">
                    <p className="text-gray-600">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

