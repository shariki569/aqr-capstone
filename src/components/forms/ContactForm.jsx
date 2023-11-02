"use client";

import React, { useState } from 'react'
import TextInput from './inputs/TextInput'
import TextArea from './inputs/TextArea'
import styles from './contactForm.module.scss';
const ContactForm = () => {

    const [contactDetails, setContacDetails] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        loading: false,
        nameError: "",
        phoneError: "",
        emailError: "",
        messageError: ""
    })

    const clearForm = () => {
        setContacDetails({
            name: "",
            email: "",
            number: "",
            message: "",
            loading: false,
            nameError: "",
            phoneError: "",
            emailError: "",
            messageError: ""
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        // Validate inputs
        const { name, email, number, message } = contactDetails;
        if (!name || !email || !number || !message) {
            alert("Please fill in all fields");
            loading = false;
            return;
        }

        try {
            const formData = {
                name,
                number,
                email,
                message,
            };

            const response = await axios.post("/api/emailRoute/send-email", formData);
            if (response.status === 200) {
                // Email sent successfully
                alert("Email Sent Successfully");
            } else {
                // Failed to send email
                alert("Failed to send email");
            }
        } catch (err) {
            console.error("Error occurred:", err);
        } finally {
            setLoading(false);
            clearForm();
        }
    };

    return (
      
            <div className={styles.container}>
                <div className={styles.form}>
                    <form onSubmit={handleSubmit}>
                        <h3 className="form-title">Please reach out to us!</h3>

                        <TextInput
                            label="Name:"
                            type="text"
                            value={contactDetails.name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Your Name"
                            error={contactDetails.nameError}
                        />

                        <TextInput
                            label="Contact No.:"
                            type="text"
                            value={contactDetails.number}
                            onChange={(e) => setNumber(e.target.value)}
                            placeholder="0912 345 6789"
                            maxLength="11"
                            error={contactDetails.phoneError}
                        />

                        <TextInput
                            label="Email:"
                            type="text"
                            value={contactDetails.email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="email@123.com"
                            error={contactDetails.emailError}
                        />

                        <TextArea
                            label="Message:"
                            value={contactDetails.message}
                            onChange={(e) => setMessage(e.target.value)}
                            placeholder="Your Message"
                            rows={10}
                            cols={60}
                            error={contactDetails.messageError}
                        />

                        {contactDetails.loading ? (
                            <button className="btn" disabled>
                                Sending <DotLoader color="#36d7b7" size={15} />
                            </button>
                        ) : (
                            <button type="submit" className="btn">
                                Submit
                            </button>
                        )}
                    </form>
                </div>
            </div>
      
    )
}

export default ContactForm
