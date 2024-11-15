"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { useRouter } from 'next/navigation';

const ContactPage = () => {

    const router = useRouter();

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });
    const [status, setStatus] = useState('');

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const { name, email, subject, message } = formData;
        const mailtoLink = `mailto:muhamadalfinpratamaa@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
            `Name: ${name}\nEmail: ${email}\n\nMessage: \n\n${message}`
        )}`;

        setStatus('Redirecting to send email...');

        router.push(mailtoLink);

        // Reset form (optional)
        setFormData({
            name: '',
            email: '',
            subject: '',
            message: '',
        });
    };

    return (
        <main className="bg-black h-screen flex justify-center items-center">
            <div className="relative flex items-top justify-center z-[1] bg-black min-h-screen sm:items-center sm:pt-0">
                <div className="max-w-6xl mx-auto sm:px-6 lg:px-8">
                    <motion.div
                        className="mt-8 overflow-hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1 }}
                    >
                        <div className="grid grid-cols-1 md:grid-cols-2">
                            <motion.div
                                className="p-6 mr-2 bg-black sm:rounded-lg lg:mt-[20px] mt-[250px]"
                                initial={{ x: -200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <h1 className="text-4xl sm:text-5xl text-center text-gray-800 dark:text-white font-extrabold tracking-tight">
                                    Get in touch
                                </h1>
                                <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                                    Fill in the form to start a conversation
                                </p>

                                <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                                    <FaMapMarkerAlt className="w-5 h-5 text-gray-500" />
                                    <p className="ml-4 text-md tracking-wide font-semibold w-40">
                                        Bandung City, West Java, Indonesia
                                    </p>
                                </div>

                                <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                                    <FaPhoneAlt className="w-5 h-5 text-gray-500" />
                                    <p className="ml-4 text-md tracking-wide font-semibold w-40">
                                        +62 851 7536 9960
                                    </p>
                                </div>

                                <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                                    <FaEnvelope className="w-5 h-5 text-gray-500" />
                                    <p className="ml-4 text-md tracking-wide font-semibold w-40">
                                        muhamadalfinpratamaa@gmail.com
                                    </p>
                                </div>
                            </motion.div>

                            <motion.form
                                onSubmit={handleSubmit}
                                className="p-6 flex flex-col justify-center"
                                initial={{ x: 200, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ duration: 1 }}
                            >
                                <div className="flex flex-col">
                                    <label htmlFor="name" className="hidden">Full Name</label>
                                    <input
                                        type="text"
                                        name="name"
                                        id="name"
                                        value={formData.name}
                                        onChange={handleInputChange}
                                        placeholder="Full Name"
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="email" className="hidden">Email</label>
                                    <input
                                        type="email"
                                        name="email"
                                        id="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="Email"
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="subject" className="hidden">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        value={formData.subject}
                                        onChange={handleInputChange}
                                        placeholder="Subject Email"
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="message" className="hidden">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        placeholder="Message"
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none h-32"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="md:w-32 bg-gradient-to-r mx-auto from-purple-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:from-purple-600 hover:to-purple-600 transition ease-in-out duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {status || 'Send'}
                                </motion.button>
                            </motion.form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </main>
    );
};

export default ContactPage;
