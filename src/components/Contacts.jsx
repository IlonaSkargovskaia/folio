import { Email, GetApp, Phone } from "@mui/icons-material";
import React, { useRef, useState } from "react";
import resumePDF from "../Frontend_CV_Ilona.pdf";
import { Button, TextField, Typography } from "@mui/material";
import emailjs from "emailjs-com";

const Contacts = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");
    const [isSubmitDisabled, setIsSubmitDisabled] = useState(true);
    const form = useRef();

    const handleInputChange = () => {
        if (name && email && message) {
            setIsSubmitDisabled(false);
        } else {
            setIsSubmitDisabled(true);
        }
    };

    const handleSendMessage = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_z45coha",
                "template_rhiht5f",
                form.current,
                "SzyWICKloGCIr2gpT"
            )
            .then(
                (result) => {
                    console.log(result.text);
                    setSuccessMessage("Message sent successfully!");
                    setName("");
                    setPhone("");
                    setEmail("");
                    setMessage("");
                },
                (error) => {
                    console.log(error.text);
                    setSuccessMessage(
                        "Error sending message. Please try again."
                    );
                }
            );
    };

    return (
        <>
            <div className="contacts-block" id="contacts">
                <div
                    className="title"
                    style={{ margin: "2rem 1rem 2rem 1rem" }}
                >
                    <h3>Contacts</h3>
                </div>
                <div className="body block accent">
                    <div
                        className="flex ac contact-box"
                        style={{ gap: "1rem", justifyContent: "space-around" }}
                    >
                        <p className="desc" style={{ width: "40%" }}>
                            Feel free to reach out to me for collaboration,
                            opportunities, or just to say hello—I'm always open
                            to connecting!
                        </p>
                        <div className="flex contacts-accent-block">
                            <div>
                                <Phone
                                    style={{
                                        marginRight: "0.5rem",
                                        fontSize: "16px",
                                    }}
                                />
                                <a href="tel:0534762486">0(534)-762-486</a>
                            </div>
                            <div
                                style={{
                                    display: "flex",
                                    alignItems: "center",
                                }}
                            >
                                <Email
                                    style={{
                                        marginRight: "0.5rem",
                                        fontSize: "16px",
                                    }}
                                />
                                <a href="mailto:ilona.skars@gmail.com">
                                    ilona.skars@gmail.com
                                </a>
                            </div>
                            <div>
                                <a
                                    href={resumePDF}
                                    download="Frontend_Dev_CV_Ilona_Skargovskaya.pdf"
                                >
                                    <Button
                                        variant="contained"
                                        color="primary"
                                        startIcon={<GetApp />}
                                    >
                                        Download CV
                                    </Button>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="contacts-block">
                <div
                    className="title"
                    style={{ margin: "2rem 1rem 2rem 1rem" }}
                >
                    <h3>Do you have questions?</h3>
                </div>
                <div className="contacts-form block-column">
                    {successMessage ? (
                        <>
                            <Typography
                                variant="body2"
                                color="success"
                                className="successmsg"
                                style={{ marginTop: "1rem" }}
                            >
                                {successMessage}
                            </Typography>
                        </>
                    ) : (
                        <form onSubmit={handleSendMessage} ref={form}>
                            <TextField
                                label="Name"
                                required
                                fullWidth
                                value={name}
                                name="user_name"
                                onChange={(e) => {
                                    setName(e.target.value);
                                    handleInputChange();
                                }}
                            />
                            <TextField
                                label="Phone"
                                required
                                fullWidth
                                value={phone}
                                onChange={(e) => {
                                    setPhone(e.target.value);
                                    handleInputChange();
                                }}
                            />
                            <TextField
                                label="Email"
                                required
                                fullWidth
                                value={email}
                                name="user_email"
                                onChange={(e) => {
                                    setEmail(e.target.value);
                                    handleInputChange();
                                }}
                            />
                            <TextField
                                label="Message..."
                                required
                                multiline
                                rows={4}
                                fullWidth
                                value={message}
                                name="message"
                                onChange={(e) => {
                                    setMessage(e.target.value);
                                    handleInputChange();
                                }}
                            />
                            <Button
                                variant="contained"
                                color="primary"
                                onClick={handleSendMessage}
                                className="download"
                                style={{ marginTop: "1rem" }}
                                disabled={isSubmitDisabled}
                            >
                                Send Message
                            </Button>
                        </form>
                    )}
                </div>
            </div>
        </>
    );
};

export default Contacts;
