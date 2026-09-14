import ContactForm from "../components/ContactForm";

function Contact() {
    return (
        <main>
            <section className="contact-section">
                <h1>Contact Me</h1>

                <p>
                    Have a question or want to work together?
                    Send me a message.
                </p>

                <ContactForm />
            </section>
        </main>
    );
}

export default Contact;