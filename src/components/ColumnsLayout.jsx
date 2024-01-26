import React, { useEffect, useState } from "react";
import { IconButton, Drawer, Hidden } from "@mui/material";
import { Menu as MenuIcon } from "@mui/icons-material";
import LeftColumn from "./LeftColumn";
import RightColumn from "./RightColumn";
import "./styles.css";
import SideBar from "./SideBar";

const ColumnsLayout = () => {
    const [drawerOpen, setDrawerOpen] = useState(false);
    const [isSmallScreen, setIsSmallScreen] = useState(
        window.innerWidth <= 1199
    );

    const toggleDrawer = () => {
        setDrawerOpen(!drawerOpen);
    };

    const handleResize = () => {
        setIsSmallScreen(window.innerWidth <= 1199);
    };

    useEffect(() => {
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    return (
        <div className="container">
            <Hidden mdDown>
                <LeftColumn />
            </Hidden>

            <Hidden lgUp>
                <IconButton onClick={toggleDrawer} className="burger">
                    <MenuIcon />
                </IconButton>
                <Drawer
                    anchor="left"
                    open={drawerOpen}
                    onClose={toggleDrawer}
                    classes={{ paper: "drawer-content" }}
                    className="sidebar"
                >
                    <div className="drawer-content">
                        <SideBar onClose={toggleDrawer} />
                    </div>
                </Drawer>
            </Hidden>

            <div
                className={`right-column ${isSmallScreen ? "full-screen" : ""}`}
            >
                <RightColumn />
            </div>
        </div>
    );
};

export default ColumnsLayout;
