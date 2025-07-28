'use client';
// import dynamic from "next/dynamic";
import React, { useState } from "react";
import { DownOutlined, RightOutlined } from '@ant-design/icons';

// Lazy-loaded components
// const NavbarComp = dynamic(() => import('./NabarComp'));
// const ProductCarousel = dynamic(() => import('./ProductSlide'));
// const FooterComp = dynamic(() => import('./FooterCompo'));
import '../styles/Faq.scss';

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqData = [
    {
      question: "Do I need an account to place an order?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium veritatis sed a ut ducimus similique veniam eligendi dicta, placeat nisi aspernatur, quaerat dolore molestiae! Quidem atque labore ipsa neque."
    },
    {
      question: "How do I sign up for an account?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium veritatis sed a ut ducimus similique veniam eligendi dicta, placeat nisi aspernatur, quaerat dolore molestiae! Quidem atque labore ipsa neque."
    },
    {
      question: "What payment methods do you accept?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium veritatis sed a ut ducimus similique veniam eligendi dicta, placeat nisi aspernatur, quaerat dolore molestiae! Quidem atque labore ipsa neque."
    },
    {
      question: "How can I track my order?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium veritatis sed a ut ducimus similique veniam eligendi dicta, placeat nisi aspernatur, quaerat dolore molestiae! Quidem atque labore ipsa neque."
    },
     {
      question: "How can I track my order?",
      answer: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque accusantium veritatis sed a ut ducimus similique veniam eligendi dicta, placeat nisi aspernatur, quaerat dolore molestiae! Quidem atque labore ipsa neque."
    }
  ];

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="faq-container">
      <h2 className="faq-title">FAQ</h2>
      <h1 className="faq-subtitle">Frequently Asked Questions</h1>

      {faqData.map((item, index) => (
        <div key={index} className="faq-item">
          <div
            className={`faq-question ${openIndex === index ? 'open' : ''}`}
            onClick={() => toggleFaq(index)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => e.key === 'Enter' && toggleFaq(index)}
          >
            <span className="question-text">{item.question}</span>
            {openIndex === index ? (
              <DownOutlined style={{ fontSize: 15 }} />
            ) : (
              <RightOutlined style={{ fontSize: 15 }} />
            )}
          </div>

          {openIndex === index && (
            <div className="faq-answer">
              {item.answer.split('\n\n').map((paragraph, i) => (
                <p key={i} className="answer-paragraph">{paragraph}</p>
              ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
