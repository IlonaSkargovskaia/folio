import React from "react";
import {
    Dialog,
    DialogContent,
    DialogActions,
    Typography,
} from "@mui/material";

const ProjectModal = ({ project, isOpen, onClose }) => {
    if (!project) {
        return null;
    }
    return (
        <Dialog open={isOpen} onClose={onClose}>
            <h2 className="modal-title">{project.title}</h2>
            <DialogContent>
                <video
                    controls 
                    autoPlay
                    width="100%"
                    height="auto"
                >
                    <source src={project.video} type="video/mp4" />
                    Your browser does not support the video tag.
                </video>

                <Typography variant="body2" paragraph className="card-desc">
                    <h3>Description: </h3>
                    {project.description}
                </Typography>
            </DialogContent>
            <DialogActions>
                <button onClick={onClose} className="details-btn">
                    Close
                </button>
            </DialogActions>
        </Dialog>
    );
};

export default ProjectModal;
