import { useState } from 'react';
import { Button } from '../../components/ui/button';
import { Input } from '../../components/ui/input';
import { Textarea } from '../../components/ui/textarea';
import emailjs from 'emailjs-com';

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

  return (
    <div className="flex items-center justify-center p-4">
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-4">
          <h1
            className="text-4xl md:text-6xl font-bold text-white"
            style={{
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
            }}
          >
            LET&apos;S MAKE
            <br />
            SOMETHING
            <br />
            AMAZING!
          </h1>
          <div className="items-center space-x-4 hidden md:flex">
            <div className="w-16 h-16 rounded-full overflow-hidden">
              <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            <div className="text-white">
              <h2 className="text-xl font-semibold">Talha Ansari</h2>
              <p className="text-[#EFF1C5] opacity-80">talhaansari1606@gmail.com</p>
            </div>
          </div>
        </div>

        <div className="bg-[#2a2a3e] rounded-3xl p-6 space-y-4">
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              placeholder="Name"
              className="bg-[#3a3a4e] border-0 text-white placeholder:text-gray-400 h-12"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            />
            <Input
              type="email"
              placeholder="Email"
              className="bg-[#3a3a4e] border-0 text-white placeholder:text-gray-400 h-12"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
            <Textarea
              placeholder="Message"
              className="bg-[#3a3a4e] border-0 text-white placeholder:text-gray-400 min-h-[160px] resize-none"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            />
            <Button
              type="submit"
              className="w-full bg-[#EFF1C5] hover:bg-[#e5e5cc] text-black font-semibold h-12 rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Submit'}
            </Button>
            {successMessage && <p className="text-green-500 mt-2">{successMessage}</p>}
          </form>
        </div>

        <div className="items-center space-x-4 flex md:hidden">
          <div className="w-16 h-16 rounded-full overflow-hidden">
            <img src="/profile.jpeg" alt="Profile" className="w-full h-full object-cover" />
          </div>
          <div className="text-white">
            <h2 className="text-xl font-semibold">Talha Ansari</h2>
            <p className="text-[#EFF1C5] opacity-80">talhaansari1606@gmail.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
