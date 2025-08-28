import { type Metadata } from "next";
import ContactForm from "@/components/contact";

export const metadata: Metadata = {
  title: "Contact | evrea",
  description:
    "Contact me via email to start a conversation or ask me anything",
  keywords: [
    "Contact",
    "Portfolio",
    "Developer Portflio",
    "Muhamad Alfin Pratama",
    "Next.js",
    "React",
    "ReactNative",
    "Android",
    "nodejs",
    "alfin",
    "alfin pratama",
    "muhamad alfin",
    "muhamad alfin pratama",
    "muhammad alfin pratama",
    "frontend web",
    "Frontend Developer",
    "Front-end Developer",
    "Front End Developer",
    "Frontend Engineer",
    "Front-end Engineer",
    "Front End Engineer",
    "Muhamad Alfin",
    "Alfin Pratama",
    "Muhamad",
    "Alfin",
    "Pratama",
    "evrea",
  ],
};

const ContactPage = () => {
  return <ContactForm />;
};
export default ContactPage;
