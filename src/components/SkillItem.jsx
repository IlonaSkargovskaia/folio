import { LinearProgress, Typography } from "@mui/material";
import React from "react";
import { keyframes } from "@emotion/react";

const SkillItem = ({ label, value }) => {
    return (
        <div className="skill-item">
            <Typography variant="subtitle2" gutterBottom>
                {label}
            </Typography>
            <LinearProgress
                variant="determinate"
                className="progress"
                value={value}
                sx={{
                    height: 10,
                    borderRadius: 5,
                    animation: `${skillBarAnimation} 1s ease-out`,
                }}
            />
        </div>
    );
};

const skillBarAnimation = keyframes`
  from {
    width: 0%;
  }
  to {
    width: 100%;
  }
`;

export default SkillItem;
