import React, { useState } from 'react';
import { Mail, Send, AlertCircle } from 'lucide-react';
import { profileData } from '../../data/profileData';

const Contact: React.FC = () => {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formSuccess, setFormSuccess] = useState(false);
  const [formError, setFormError] = useState(false);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      // This is a demo - in a real scenario you would check for actual success/error
      setFormSuccess(true);
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="mb-12 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Interested in collaboration, speaking opportunities, or just want to discuss research? Contact me using the form below.
          </p>
        </div>
        
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-xl shadow-lg overflow-hidden">
            <div className="grid grid-cols-1 md:grid-cols-2">
              {/* Contact Info */}
              <div className="bg-blue-900 p-8 text-white">
                <h3 className="text-2xl font-semibold mb-6">Contact Information</h3>
                
                <div className="mb-8">
                  <p className="mb-2 font-medium">Email</p>
                  <a 
                    href={`mailto:${profileData.email}`} 
                    className="text-teal-300 hover:text-white transition-colors flex items-center"
                  >
                    <Mail size={18} className="mr-2" />
                    {profileData.email}
                  </a>
                </div>
                
                <div className="mb-8">
                  <p className="mb-2 font-medium">Office</p>
                  <p className="text-gray-300">
                    Department of Computer Science<br />
                    Stanford University<br />
                    Gates Building, Room 341<br />
                    Stanford, CA 94305
                  </p>
                </div>
                
                <div>
                  <p className="mb-2 font-medium">Office Hours</p>
                  <p className="text-gray-300">
                    Monday: 10:00 AM - 12:00 PM<br />
                    Thursday: 2:00 PM - 4:00 PM<br />
                    Or by appointment
                  </p>
                </div>
              </div>
              
              {/* Contact Form */}
              <div className="p-8">
                {formSuccess ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-green-100 text-green-800 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <Send size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
                    <p className="text-gray-600 mb-6">
                      Thank you for your message. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => {
                        setFormSuccess(false);
                        setFormState({
                          name: '',
                          email: '',
                          subject: '',
                          message: ''
                        });
                      }}
                      className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : formError ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="bg-red-100 text-red-800 p-4 rounded-full inline-flex items-center justify-center mb-4">
                      <AlertCircle size={24} />
                    </div>
                    <h3 className="text-2xl font-semibold mb-2">Something Went Wrong</h3>
                    <p className="text-gray-600 mb-6">
                      There was an error sending your message. Please try again later.
                    </p>
                    <button
                      onClick={() => setFormError(false)}
                      className="px-6 py-2 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors"
                    >
                      Try Again
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    <h3 className="text-2xl font-semibold mb-6">Send a Message</h3>
                    
                    <div className="grid grid-cols-1 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formState.name}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formState.email}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          required
                          value={formState.subject}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        >
                          <option value="">Select a subject</option>
                          <option value="Research Collaboration">Research Collaboration</option>
                          <option value="Speaking Opportunity">Speaking Opportunity</option>
                          <option value="Student Inquiry">Student Inquiry</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Message
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          required
                          rows={5}
                          value={formState.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-colors"
                        ></textarea>
                      </div>
                      
                      <div>
                        <button
                          type="submit"
                          disabled={isSubmitting}
                          className="w-full px-6 py-3 bg-blue-900 text-white rounded-md hover:bg-blue-800 transition-colors flex items-center justify-center"
                        >
                          {isSubmitting ? (
                            <>
                              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                              </svg>
                              Sending...
                            </>
                          ) : (
                            <>
                              <Send size={18} className="mr-2" />
                              Send Message
                            </>
                          )}
                        </button>
                      </div>
                    </div>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;