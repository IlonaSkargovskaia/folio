// WorkExperienceTimeline.js
import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";
import { workExperienceData } from "../workExperienceData";
import { Star as StarIcon } from "@mui/icons-material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

const WorkExperience = () => {
    return (
        <>
            <div className="title" style={{ margin: "1rem 1rem 2rem 1rem" }}>
                <h3>Work Experience</h3>
            </div>
            <Timeline style={{ padding: 0 }}>
                {workExperienceData.map((experience, index) => (
                    <TimelineItem key={index}>
                        <TimelineSeparator>
                            <TimelineDot
                                style={{ backgroundColor: "#6138ff" }}
                            />
                            {index < workExperienceData.length - 1 && (
                                <TimelineConnector />
                            )}
                        </TimelineSeparator>
                        <TimelineContent>
                            <div className="work-header flex ac">
                                <Typography variant="h6" className="title">
                                    {experience.title} in{" "}
                                    <span>{experience.company}</span>
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    style={{
                                        fontSize: "14px",
                                        fontWeight: 200,
                                    }}
                                >
                                    <div className="flex ac" style={{color: "#8f9bba"}}>
                                        {experience.year}
                                        <CalendarMonthIcon
                                            style={{
                                                fontSize: "14px",
                                                marginLeft: "0.5rem",
                                            }}
                                        />
                                    </div>
                                </Typography>
                            </div>
                            <div className="block work-block hover">
                                <ul>
                                    {experience.description.map((point, i) => (
                                        <li
                                            key={i}
                                            className="flex"
                                            style={{ margin: "0.2rem 0" }}
                                        >
                                            <StarIcon
                                                style={{
                                                    fontSize: "16px",
                                                    marginRight: "0.5rem",
                                                    marginTop: "0.1rem",
                                                }}
                                            />{" "}
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </>
    );
};

export default WorkExperience;
