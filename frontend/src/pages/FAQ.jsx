import { useState } from "react";

export default function FAQ() {
  const faqs = [
    {
      question: "What is ShowRate?",
      answer:
        "ShowRate is a platform where you can create a list of all the movies you’ve watched, rate them, and rank them from best to worst."
    },
    {
      question: "Do I need an account to use ShowRate?",
      answer:
        "Yes, creating an account allows you to save your movie lists, ratings, and access them anytime you log in."
    },
    {
      question: "Can I share my movie list?",
      answer:
        "Yes! You can share your profile link with friends so they can view your movie rankings."
    },
    {
      question: "Is ShowRate free to use?",
      answer:
        "Absolutely. ShowRate is free to use. In the future, we may add optional premium features."
    },
    {
      question: "Can I edit or delete my ratings?",
      answer:
        "Yes, you can update or remove ratings from your profile at any time."
    }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen mt-15 flex flex-col items-center py-12 px-4">
      <div className="max-w-3xl w-full bg-[#3C3D37] shadow-lg rounded-2xl p-8 text-[#ECDFCC]">
        
        {/* Header */}
        <h1 className="text-3xl font-bold mb-6">Frequently Asked Questions</h1>
        <p className="mb-8 text-[#ECDFCC]/80">
          Here are some of the most common questions about ShowRate.  
          Click on a question to reveal the answer.
        </p>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-600 rounded-lg overflow-hidden"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center px-4 py-3 text-left font-medium hover:bg-[#2D2E29] transition"
              >
                <span>{faq.question}</span>
                <span>{openIndex === index ? "-" : "+"}</span>
              </button>

              {openIndex === index && (
                <div className="px-4 py-3 bg-[#2D2E29] text-sm text-[#ECDFCC]/90">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
