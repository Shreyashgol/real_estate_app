import React,{useState} from 'react'
import { toast } from 'react-toastify';
import {motion} from "framer-motion"

const Contact = () => {
  const [result, setResult] = React.useState("");

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e0d25c3-35a9-4bf6-987f-9dec824139ae");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("");
      toast.success("Form Submitted Successfully");
      event.target.reset();
    } else {
      console.log("Error", data);
      toast.error(data.message);
      setResult("");
    }
  };
  return (
    <motion.div
    initial = {{opacity:0, x:200}}
      transition={{duration:1.5}}
      whileInView={{opacity:1, x:0}}
      viewport={{once: true}} 
    className='text-center p-6 py-20 lg:px-32 w-full overflow-hidden' id='Contact'>
      <h1 className='text-2xl sm:text-4xl font-bold mb-2 text-center '>Contact<span className='underline underline-offset-4 decoration-1 under font-light'>With Us</span></h1>
      <p className='text-center text-gray-500 mb-12 max-w-80 mx-auto'>Ready to Make a Move? Let's Build Your Future Together</p>

    <form className='max-w-2xl mx-auto text-gray-600 pt-8' onSubmit={onSubmit}>
      <div className='flex flex-wrap'>
        <div className='w-full md:w-1/2 text-left'>
        Your Name
          <input type="text" placeholder='Enter your name' className='border border-gray-300 rounded py-3 w-full ] mt-2 px-4' name='name' required/>
        </div>

        <div className='w-full md:w-1/2 text-left md:pl-4'>Your Email
          <input type="email" placeholder='Enter your Email' className='border border-gray-300 rounded py-3 w-full mt-2 px-4' name='email' required/>
        </div>
      </div>
      <div className='my-6 text-left'>Message
        <textarea rows="5" placeholder='Enter your message' className='border border-gray-300 rounded py-3 w-full mt-2 px-4 h-48 resize-none ' name='message' required></textarea>
      </div>
      <button type='submit' className='bg-blue-600 text-white px-12 py-3 mb-10 rounded hover:bg-blue-700 transition duration-300'>{result ? result: "Send Message"}</button>
    </form>
    </motion.div>
  )
}

export default Contact