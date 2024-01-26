import React, { useState } from "react";
import { List, ListItem } from "@mui/material";
import "./styles.css";
import { navigationLinks } from "../linksData";
import { socialLinks } from "../linksData";

const SideBar = ({ onClose }) => {
    const [active, setActive] = useState(false);

    const handleActive = (index) => {
        setActive(index);
    };

    return (
        <div>
            <div className="sidebar-header">
            <button className="close-button" onClick={onClose}>
                X
            </button>
                <h2>
                    Ilona <span>Skargovskaia</span>
                </h2>
                <div
                    style={{
                        margin: "0.5rem 0",
                        fontSize: "14px",
                        color: "#8f9bba",
                    }}
                >
                    Full Stack developer
                </div>
            </div>

            <List className="nav-list">
                {navigationLinks.map((link, index) => (
                    <ListItem
                        key={index}
                        component="a"
                        href={link.link}
                        onClick={() => {
                            handleActive(index);
                            onClose();
                        }}
                        className={active === index ? "active" : ""}
                    >
                        <div className="list-icon">{link.icon}</div>
                        <div className="list-label">{link.label}</div>
                    </ListItem>
                ))}
            </List>

            

            <div className="social-links">
                <h3>Find me</h3>
                <div className="social-links-box">
                    {socialLinks.map((social, index) => (
                        <a
                            key={index}
                            className="social-link-item"
                            href={social.link}
                            target="_blank"
                            rel="noreferrer"
                        >
                            <div className="social-icon">{social.icon}</div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default SideBar;
