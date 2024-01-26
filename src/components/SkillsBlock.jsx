import React from "react";
import SkillItem from "./SkillItem";
import { Dashboard, PhoneAndroid, Web } from "@mui/icons-material";

const SkillsBlock = () => {
    return (
        <section className="skills" id="skills">
            <div className="my-row skills">
                <div className="block">
                    <div className="title">
                        <h3>Technical Skills</h3>
                    </div>
                    <div className="body flex">
                        <div className="bar">
                            <SkillItem label="HTML5 & SASS (95%)" value={95} />
                            <SkillItem label="JavaScript (80%)" value={80} />
                            <SkillItem label="React.js (75%)" value={75} />
                            <SkillItem label="React Native (65%)" value={65} />
                            <SkillItem label="Redux Toolkit (35%)" value={35} />
                            <SkillItem
                                label="Tailwind, Bootstrap, MUI (80%)"
                                value={80}
                            />
                        </div>
                        <div className="bar">
                            <SkillItem label="Node.js (60%)" value={60} />
                            <SkillItem label="PostgreSQL (50%)" value={50} />
                            <SkillItem label="NPM, GIT (80%)" value={80} />
                            <SkillItem label="WordPress (85%)" value={85} />
                            <SkillItem
                                label="Google Firebase (65%)"
                                value={65}
                            />
                            <SkillItem
                                label="Python & Django (30%)"
                                value={30}
                            />
                        </div>
                    </div>
                </div>

                <div className="block">
                    <div className="title">
                        <h3>What I do</h3>
                    </div>

                    <p className="about-text">
                        In addition to my technical skills, I have strong
                        problem-solving abilities, follow web development
                        trends, and write clean, understandable code. I’m
                        passionate about crafting innovative and efficient web
                        applications.
                    </p>

                    <div className="body">
                        <div className="specializations flex">
                            <div className="specialization ">
                                <div className="specialization-img">
                                    <Web />
                                </div>
                                <h4>Websites</h4>
                                <p>
                                    Building responsive and user-friendly
                                    websites.
                                </p>
                            </div>
                            <div className="specialization">
                                <div className="specialization-img">
                                    <PhoneAndroid />
                                </div>
                                <h4>Mobile Apps</h4>
                                <p>
                                    Developing mobile applications for iOS and
                                    Android.
                                </p>
                            </div>
                            <div className="specialization">
                                <div className="specialization-img">
                                    <Dashboard />
                                </div>
                                <h4>Dashboards</h4>
                                <p>
                                    Creating interactive and insightful
                                    dashboards.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default SkillsBlock;
