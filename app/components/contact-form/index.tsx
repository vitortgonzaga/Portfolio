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

// const ContactFormSchema = z.object({
//   name: z.string().min(3).max(100),
//   email: z.email(),
//   message: z.string().min(1).max(500),
// });

// type ContactFormData = z.infer<typeof ContactFormSchema>;

const ContactForm = () => {
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
    <section className="py-16 px-6 md:px-32 flex items-center justify-center bg-zinc-800 ">
      <div className="w-full max-w-[420px] mx-auto">
        <SectionTitle
          subtitle="contato"
          title="Vamos trabalhar juntos? Entre em contato"
          className="items-center text-center"
        />
        <div className="text-7xl text-gray-200 flex justify-center items-center h-20 gap-3 mt-5">
          {MOCK_CONTACTS.map((contact, index) => (
            <a
              href={contact.url}
              key={`contact-${index}
              `}
              target="_blank"
              className="hover:text-sky-500 transition-colors"
            >
              {contact.icon}
            </a>
          ))}
        </div>
        {/* <form
          className="mt-12 w-full flex flex-col gap-4"
          onSubmit={handleSubmit(onSubmit)}
        >
          <input
            placeholder="Nome"
            className="w-full h-14 bg-gray-600 rounded-lg text-white placeholder:text-gray-300 p-4 focus:outline-none focus:ring-1 ring-sky-500"
            {...register("name")}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full h-14 bg-gray-600 rounded-lg text-white placeholder:text-gray-300 p-4 focus:outline-none focus:ring-1 ring-sky-500"
            {...register("email")}
          />
          <textarea
            placeholder="Mensagem"
            className="resize-none w-full h-[138px] bg-gray-600 rounded-lg text-white placeholder:text-gray-300 p-4 focus:outline-none focus:ring-1 ring-sky-500"
            maxLength={500}
            {...register("message")}
          />

          <Button className="w-max mx-auto mt-6">
            Enviar Mensagem
            <HiArrowNarrowRight />
          </Button>
        </form> */}
      </div>
    </section>
  );
};

export default ContactForm;
