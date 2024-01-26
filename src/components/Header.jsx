import React from "react";
import { Button, Typography } from "@mui/material";
import { Phone, Email, GetApp } from "@mui/icons-material";
import resumePDF from "../Frontend_CV_Ilona.pdf";

const Header = () => {
    return (
        <header className="header"
            
        >
            
            <div id="home">
                <h1>
                    Hi there! I’m Ilona <br />
                    <span>Full Stack</span> Developer
                </h1>
            </div>
            <div className="flex ac header-box">
                <div className="header-contacts">
                    <ContactInfo
                        icon={<Phone />}
                        label="0(534)-762-486"
                        href="tel:0534762486"
                    />
                    <ContactInfo
                        icon={<Email />}
                        label="ilona.skars@gmail.com"
                        href="mailto:ilona.skars@gmail.com"
                    />
                </div>
                <a href={resumePDF} download="Ilona_Skargovskaia_Resume.pdf">
                    <Button
                        variant="contained"
                        color="primary"
                        startIcon={<GetApp />}
                        className="download"
                    >
                        Download CV
                    </Button>
                </a>
            </div>
        </header>
    );
};

const ContactInfo = ({ icon, label, href }) => {
    return (
        <div className="contacts-icon">
            {icon}
            <Typography variant="subtitle2" className="contacts-label">
                <a
                    href={href}
                    style={{ textDecoration: "none", color: "inherit" }}
                >
                    {label}
                </a>
            </Typography>
        </div>
    );
};

export default Header;
