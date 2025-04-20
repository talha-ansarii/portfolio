import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import emailjs from 'emailjs-com';
import { motion } from 'framer-motion'; // Import Framer Motion

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // EmailJS send function
    emailjs
      .send(
        'service_qywxa86', // replace with your EmailJS service ID
        'template_klq3n4d', // replace with your EmailJS template ID
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        '-0OPTdwBwb7TARA80' // replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log('Email successfully sent!', result.text);
          setSuccessMessage('Thank you! Your message has been sent.');
          setFormData({ name: '', email: '', message: '' });
        },
        (error) => {
          console.error('Failed to send email:', error);
          alert('An error occurred while sending your message.');
        }
      )
      .finally(() => setIsSubmitting(false));
  };

  const isMobile = window.innerWidth <= 768; // Check if the screen width is less than or equal to 768px
  return (
    <motion.div
      className="flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <motion.div className="space-y-4">
          <motion.h1
            className="text-xl mt-[-100px] md:mt-0 text-center md:text-left   md:text-6xl font-bold text-white"
            style={{ textTransform: 'uppercase', letterSpacing: '0.05em' }}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            LET&apos;S MAKE
            <br />
            SOMETHING 
            {isMobile ? ' ' : <br/>}
            AMAZING!
          </motion.h1>

          <motion.div
            className="items-center space-x-4 hidden md:flex"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-semibold">Talha Ansari</h2>
              <p className="text-[#EFF1C5] opacity-80">talhaansari1606@gmail.com</p>
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          className="bg-[#2a2a3e] = rounded-3xl mt-[-50px] md:mt-0 p-6 space-y-4"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              required
              placeholder="Name"
              className="bg-[#3a3a4e] border-0  text-white placeholder:text-gray-400 md:h-12"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
            required
              type="email"
              placeholder="Email"
              className="bg-[#3a3a4e] border-0 text-white placeholder:text-gray-400 md:h-12"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Textarea
            required
              placeholder="Message"
              className="bg-[#3a3a4e] border-0 text-white placeholder:text-gray-400 md:min-h-[160px] resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button
              type="submit"
              className="w-full bg-[#EFF1C5] hover:bg-[#e5e5cc] text-black font-semibold h-10 md:h-12 rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
            {successMessage && (
              <motion.p
                className="text-green-500 mt-2"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
              >
                {successMessage}
              </motion.p>
            )}
          </form>
        </motion.div>

        <motion.div
          className="items-center mt-[-20px] space-x-4 flex md:hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <div className="w-12 h-12 md:w-16 md:h-16 rounded-full overflow-hidden">
            <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <h2 className="text-lg md:text-xl font-semibold">Talha Ansari</h2>
            <p className="text-[#EFF1C5] text-sm md:text-md opacity-80">talhaansari1606@gmail.com</p>
          </div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default Contact;
