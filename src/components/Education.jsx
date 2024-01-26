import React from "react";
import { educationData } from "../educationData";
import { School as SchoolIcon } from "@mui/icons-material";
import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";
import { Typography } from "@mui/material";

const Education = () => {
    return (
        <div className="edu-block">
            <div className="title" style={{ margin: "1rem 1rem 2rem 1rem" }}>
                <h3>Education</h3>
            </div>
            <div className="body block">
                <Timeline align="left">
                    {educationData.map((education, index) => (
                        <TimelineItem key={index}>
                            <TimelineSeparator>
                                <TimelineDot
                                    style={{ backgroundColor: "#6138ff" }}
                                />
                                {index < educationData.length - 1 && (
                                    <TimelineConnector />
                                )}
                            </TimelineSeparator>
                            <TimelineContent>
                                <Typography variant="h6" className="edu-title">
                                    {education.title}
                                </Typography>
                                <Typography
                                    variant="subtitle1"
                                    color="textSecondary"
                                    className="year"
                                >
                                    {education.year} / {education.country}
                                </Typography>
                                <Typography variant="body1">
                                    <div
                                        className="flex"
                                        style={{ marginBottom: "1rem" }}
                                    >
                                        <SchoolIcon
                                            style={{ marginRight: "0.5rem", fontSize: "15px" }}
                                        />
                                        {education.institution}
                                    </div>
                                </Typography>
                            </TimelineContent>
                        </TimelineItem>
                    ))}
                </Timeline>
            </div>
        </div>
    );
};

export default Education;
