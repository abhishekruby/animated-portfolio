"use client";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

function Contact() {
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const ref = useRef();
  const formRef = useRef();

  const sendEmail = (e: any) => {
    e.preventDefault();
  };

  return (
    <motion.div
      id="contact"
      ref={ref}
      className="contact w-screen mx-auto flex items-center gap-10 md:gap-4 flex-col  md:flex-row h-full px-4 py-24 md:py-20 md:px-20 xl:px-36 xl:py-36"
      initial="initial"
      whileInView="animate"
    >
      <motion.div
        className="textContainer w-full md:flex-1 flex flex-col gap-8"
      >
        <motion.h1
          className="xl:text-8xl text-6xl text-zinc-200 font-extrabold"
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: 'easeInOut', delay: 0.5 }}
        >
          Let’s work <span className="text-cyan-500">Together</span>
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: -200 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: 'easeInOut', delay: 0.7 }}
          className="item"
        >
          <h2 className="text-slate-200 text-lg md:text-2xl font-bold mb-1 md:mb-2">Mail</h2>
          <span className="text-base md:text-xl font-medium text-slate-400">
            hello@react.dev
          </span>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -200 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.8 }}
          className="item"
        >
          <h2 className="text-slate-200 text-lg md:text-2xl font-bold mb-1 md:mb-2">Phone</h2>
          <span className="text-base md:text-xl font-medium text-slate-400">+1 234 5678</span>
        </motion.div>
      </motion.div>
      <div className="formContainer w-full md:flex-1 relative pt-2 md:p-8">
        <motion.form
          ref={formRef}
          onSubmit={sendEmail}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, position: "relative" }}
          transition={{ duration: 0.7, ease: 'easeInOut', delay: 0.8 }}
          className="flex flex-col gap-4 "
        >
          <input
            type="text"
            required
            placeholder="Name"
            name="name"
            className="p-4 bg-transparent border border-zinc-200 text-zinc-200 rounded-md"
          />
          <input
            type="email"
            required
            placeholder="Email"
            name="email"
            className="p-4 bg-transparent border border-zinc-200 text-zinc-200 rounded-md"
          />
          <textarea
            rows={8}
            placeholder="Message"
            name="message"
            className="p-4 bg-transparent border border-zinc-200 text-zinc-200 rounded-md"
          />
          <button className="p-3 md:p-4 bg-cyan-600 hover:bg-cyan-700 text-zinc-200 font-medium cursor-pointer rounded-lg">
            Submit
          </button>
          {error && "Error"}
          {success && "Success"}
        </motion.form>
      </div>
    </motion.div>
  );
}

export default Contact;
