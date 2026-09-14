import { useState } from "react";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    const [errors, setErrors] = useState({});
    const [submitMessage, setSubmitMessage] = useState("");
    const [submitError, setSubmitError] = useState("");
    const [submitting, setSubmitting] = useState(false);

    function handleChange(event) {
        const { name, value } = event.target;

        setFormData({
            ...formData,
            [name]: value
        });
    }

    function validateForm() {
        const newErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = "Name is required";
        }

        if (!formData.email.trim()) {
            newErrors.email = "Email is required";
        } else if (!formData.email.includes("@")) {
            newErrors.email = "Enter a valid email";
        }

        if (!formData.message.trim()) {
            newErrors.message = "Message is required";
        }

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    }

    async function handleSubmit(event) {
        event.preventDefault();

        setSubmitMessage("");
        setSubmitError("");

        if (!validateForm()) {
            return;
        }

        setSubmitting(true);

        try {
            const response = await fetch(
                "http://localhost:5000/api/contact",
                {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(formData)
                }
            );

            const data = await response.json();

            if (!response.ok) {
                throw new Error(
                    data.error || "Failed to submit message"
                );
            }

            setSubmitMessage(
                "Message submitted successfully!"
            );

            setFormData({
                name: "",
                email: "",
                message: ""
            });

            setErrors({});
        } catch (error) {
            setSubmitError(error.message);
        } finally {
            setSubmitting(false);
        }
    }

    const isFormValid =
        formData.name.trim() &&
        formData.email.trim() &&
        formData.message.trim();

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Name</label>

                <input
                    id="name"
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Enter your name"
                />

                {errors.name && <p>{errors.name}</p>}
            </div>

            <div>
                <label htmlFor="email">Email</label>

                <input
                    id="email"
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email"
                />

                {errors.email && <p>{errors.email}</p>}
            </div>

            <div>
                <label htmlFor="message">Message</label>

                <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message"
                    rows="6"
                ></textarea>

                {errors.message && <p>{errors.message}</p>}
            </div>

            <button
                type="submit"
                className="primary-btn"
                disabled={!isFormValid || submitting}
            >
                {submitting
                    ? "Sending..."
                    : "Send Message"}
            </button>

            {submitMessage && <p>{submitMessage}</p>}

            {submitError && <p>{submitError}</p>}
        </form>
    );
}

export default ContactForm;