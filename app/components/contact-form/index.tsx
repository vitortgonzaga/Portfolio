"use client";

import React from "react";
// import { SectionTitle } from "../section-title";
// import { HiArrowNarrowRight } from "react-icons/hi";
// import Button from "../button";
// import { useForm } from "react-hook-form";
// import { z } from "zod";
// import { zodResolver } from "@hookform/resolvers/zod";
import { TbBrandLinkedin, TbBrandWhatsapp } from "react-icons/tb";
import { SectionTitle } from "../section-title";
import { ScrollReveal } from "../scroll-reveal";
import { useLanguage } from "../../contexts/LanguageContext";

// const ContactFormSchema = z.object({
//   name: z.string().min(3).max(100),
//   email: z.email(),
//   message: z.string().min(1).max(500),
// });

// type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
  const { t } = useLanguage();
  // const { handleSubmit, register } = useForm<ContactFormData>({
  //   resolver: zodResolver(ContactFormSchema),
  // });

  // const onSubmit = (data: ContactFormData) => {
  //   console.log(data);
  // };

  const MOCK_CONTACTS = [
    {
      url: "https://www.linkedin.com/in/vitorgonzaga10/",
      icon: <TbBrandLinkedin />,
    },
    {
      url: "https://wa.me/5512996732304",
      icon: <TbBrandWhatsapp />,
    },
  ];

  return (
    <ScrollReveal>
      <section className="py-16 px-6 md:px-32 flex items-center justify-center bg-zinc-800/50">
        <div className="w-full max-w-[520px] mx-auto">
          <div className="bg-zinc-900/60 backdrop-blur-sm border border-zinc-800/50 rounded-2xl p-8 md:p-12 shadow-2xl">
            <SectionTitle
              subtitle={t("contact.subtitle")}
              title={t("contact.title")}
              className="items-center text-center"
            />
            <div className="text-7xl text-gray-200 flex justify-center items-center h-20 gap-3 mt-5">
              {MOCK_CONTACTS.map((contact, index) => (
                <a
                  href={contact.url}
                  key={`contact-${index}`}
                  target="_blank"
                  className="hover:text-sky-500 transition-colors"
                >
                  {contact.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
};

export default ContactForm;
