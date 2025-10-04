import { useState } from "react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [animatingIndex, setAnimatingIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What makes your service unique?",
      answer:
        "Our service combines cutting-edge technology with personalized support to deliver exceptional results. We focus on understanding your specific needs and tailoring our solutions accordingly.",
    },
    {
      question: "How quickly can I get started?",
      answer:
        "You can get started immediately! Our onboarding process is streamlined and takes just a few minutes. Once you sign up, you'll have instant access to all features and our support team will guide you through the setup.",
    },
    {
      question: "What kind of support do you offer?",
      answer:
        "We provide 24/7 customer support through multiple channels including live chat, email, and phone. Our dedicated support team is always ready to help you resolve any issues or answer your questions.",
    },
    {
      question: "Can I upgrade or downgrade my plan?",
      answer:
        "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and if you downgrade, the changes will apply at the start of your next billing cycle. There are no penalties for changing plans.",
    },
    {
      question: "Is my data secure with your platform?",
      answer:
        "Security is our top priority. We use industry-standard encryption, regular security audits, and comply with all major data protection regulations including GDPR and CCPA. Your data is stored in secure, redundant servers.",
    },
    {
      question: "Do you offer a free trial?",
      answer:
        "Yes! We offer a 14-day free trial with full access to all features. No credit card required to start. You can explore everything we have to offer and make an informed decision before committing.",
    },
  ];

  const toggleFAQ = (index: number) => {
    if (openIndex === index) {
      setOpenIndex(null);
      setAnimatingIndex(null);
    } else {
      setOpenIndex(index);
      setAnimatingIndex(index);
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12 sm:px-6 lg:px-8">
      <style>{`
        @keyframes rotateToX {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(45deg);
          }
        }

        @keyframes rotateToXShadow {
          0% {
            transform: translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(0deg);
          }
          100% {
            transform: translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(45deg);
          }
        }

        @keyframes rotateToPlus {
          0% {
            transform: translate(-50%, -50%) rotate(45deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
        }

        @keyframes rotateToPlusShadow {
          0% {
            transform: translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(45deg);
          }
          100% {
            transform: translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(0deg);
          }
        }

        .line-to-x {
          animation: rotateToX 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .line-to-plus {
          animation: rotateToPlus 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .shadow-to-x {
          animation: rotateToXShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }

        .shadow-to-plus {
          animation: rotateToPlusShadow 0.3s cubic-bezier(0.4, 0, 0.2, 1) forwards;
        }
      `}</style>

      {/* Header */}
      <div className="text-center mb-8 sm:mb-12">
        <h1 className="text-sky-900 text-3xl sm:text-4xl lg:text-5xl font-normal font-['Bricolage_Grotesque'] mb-4">
          The Bounce Zone
        </h1>
        <p className="text-gray-600 text-lg sm:text-xl lg:text-2xl font-medium font-['Poppins'] px-4">
          Here&apos;s where we break it down with a spark.
        </p>
      </div>

      {/* FAQ Accordion */}
      <div className="w-full max-w-5xl space-y-0">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border-t border-b border-sky-900 bg-gray-50"
          >
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full px-4 sm:px-6 py-5 sm:py-6 flex justify-between items-start gap-4 text-left hover:bg-gray-100 transition-colors duration-200"
            >
              <span className="text-sky-900 text-2xl font-medium font-['Bricolage_Grotesque'] flex-1">
                {faq.question}
              </span>
              <div className="flex-shrink-0 w-12 h-12 sm:w-16 sm:h-16 flex items-center justify-center relative">
                {/* Plus/X Icon with shadow */}
                <div className="relative w-7 h-7 sm:w-9 sm:h-9">
                  {/* Shadow lines */}
                  <div
                    className={`absolute h-2 sm:h-[4px] bg-[#CAD5DF] rounded-full ${
                      openIndex === index ? "shadow-to-x" : "shadow-to-plus"
                    }`}
                    style={{
                      width: "100%",
                      top: "50%",
                      left: "50%",
                      transform:
                        openIndex === index
                          ? "translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(45deg)"
                          : "translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(0deg)",
                    }}
                  />
                  <div
                    className={`absolute w-2 sm:w-[4px] bg-[#CAD5DF] rounded-full ${
                      openIndex === index ? "shadow-to-x" : "shadow-to-plus"
                    }`}
                    style={{
                      height: "100%",
                      top: "50%",
                      left: "50%",
                      transform:
                        openIndex === index
                          ? "translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(45deg)"
                          : "translate(calc(-50% + 6px), calc(-50% + 4px)) rotate(0deg)",
                    }}
                  />

                  {/* Main icon lines */}
                  <div
                    className={`absolute top-1/2 left-1/2 w-full h-2 sm:h-[4px] bg-sky-900 rounded-full ${
                      openIndex === index ? "line-to-x" : "line-to-plus"
                    }`}
                    style={{
                      transform:
                        openIndex === index
                          ? "translate(-50%, -50%) rotate(45deg)"
                          : "translate(-50%, -50%) rotate(0deg)",
                    }}
                  />
                  <div
                    className={`absolute top-1/2 left-1/2 w-2 sm:w-[4px] h-full bg-sky-900 rounded-full ${
                      openIndex === index ? "line-to-x" : "line-to-plus"
                    }`}
                    style={{
                      transform:
                        openIndex === index
                          ? "translate(-50%, -50%) rotate(45deg)"
                          : "translate(-50%, -50%) rotate(0deg)",
                    }}
                  />
                </div>
              </div>
            </button>

            {/* Answer */}
            <div
              className="overflow-hidden transition-all duration-700 ease-in-out"
              style={{
                maxHeight: openIndex === index ? "400px" : "0",
                opacity: openIndex === index ? 1 : 0,
              }}
            >
              <div className="px-4 sm:px-6 pb-5 sm:pb-6 pt-2">
                <p className="text-gray-700 text-base leading-relaxed font-['Poppins']">
                  {faq.answer}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
