"use client"

import { FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useState } from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Contact | evrea',
    description: 'Contact me via email to start a conversation or ask me anything',
    keywords: [
        'Contact',
        'Portfolio',
        'Developer Portflio',
        'Muhamad Alfin Pratama',
        'Next.js',
        'React',
        'ReactNative',
        'Android',
        'nodejs',
        'alfin',
        'alfin pratama',
        'muhamad alfin',
        'muhamad alfin pratama',
        'muhammad alfin pratama',
        'frontend web',
        'Frontend Developer',
        'Front-end Developer',
        'Front End Developer',
        'Frontend Engineer',
        'Front-end Engineer',
        'Front End Engineer',
        'Muhamad Alfin',
        'Alfin Pratama',
        'Muhamad',
        'Alfin',
        'Pratama',
        'evrea',
    ],
}

const ContactPage = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [subject, setSubject] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        setStatus('Sending...');

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ name, email, subject, message }),
            });

            const data = await response.json();
            setStatus(data.message);
        } catch (error) {
            setStatus('Error sending email');
        } finally {
            // Reset form state (optional)
            setName('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
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
                                        onChange={(e) => setName(e.target.value)}
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
                                        placeholder="Email"
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="subject" className="hidden">Subject</label>
                                    <input
                                        type="text"
                                        name="subject"
                                        id="subject"
                                        placeholder="Subject Email"
                                        onChange={(e) => setSubject(e.target.value)}
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none"
                                    />
                                </div>

                                <div className="flex flex-col mt-2">
                                    <label htmlFor="message" className="hidden">Message</label>
                                    <textarea
                                        name="message"
                                        id="message"
                                        placeholder="Message"
                                        onChange={(e) => setMessage(e.target.value)}
                                        className="w-full mt-2 py-3 px-3 rounded-lg bg-transparent border border-white text-white placeholder-gray-400 font-semibold focus:border-indigo-500 focus:outline-none h-32"
                                    />
                                </div>

                                <motion.button
                                    type="submit"
                                    className="md:w-32 bg-gradient-to-r mx-auto from-purple-500 to-yellow-500 text-white font-bold py-3 px-6 rounded-lg mt-3 hover:from-purple-600 hover:to-purple-600 transition ease-in-out duration-300"
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                >
                                    {status || 'send'}
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
