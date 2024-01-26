import React from "react";
import { Typography } from "@mui/material";

const IconBlock = ({ icon, number, label }) => {
    return (
        <div className="icon-block block hover">
            <div className="icon">{icon}</div>
            <div className="icon-desc">
                <Typography variant="subtitle2" className="number">
                    {number}
                </Typography>
                <Typography variant="subtitle2" className="label">
                    {label}
                </Typography>
            </div>
        </div>
    );
};

export default IconBlock;
