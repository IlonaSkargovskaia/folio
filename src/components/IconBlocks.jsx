import React from "react";
import {
    Work as ExperienceIcon,
    AssignmentTurnedIn as ProjectsIcon,
    ThumbUp as UserFriendlyIcon,
    Star as StarIcon,
} from "@mui/icons-material";
import IconBlock from "./IconBlock";

const IconBlocks = () => {
    return (
        <div className="icon-blocks">
            <IconBlock
                icon={<ExperienceIcon />}
                number="3+"
                label="Years of Experience"
            />
            <IconBlock
                icon={<ProjectsIcon />}
                number="30+"
                label="Completed Projects"
            />
            <IconBlock
                icon={<UserFriendlyIcon />}
                number="100%"
                label="User-friendly Interfaces"
            />
            <IconBlock icon={<StarIcon />} number="500+" label="Successfully Resolved Issues" />
        </div>
    );
};

export default IconBlocks;
