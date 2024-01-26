import {
    Facebook,
    Instagram,
    GitHub,
    LinkedIn,
    Home as HomeIcon,
    Equalizer as FeaturesIcon,
    Work as PortfolioIcon,
    Receipt as ResumeIcon,
    Mail as ContactsIcon,
} from "@mui/icons-material";

export const navigationLinks = [
    { label: "Home", icon: <HomeIcon />, link: "#home" },
    { label: "Skills", icon: <FeaturesIcon />, link: "#skills" },
    { label: "Portfolio", icon: <PortfolioIcon />, link: "#portfolio" },
    { label: "Experience", icon: <ResumeIcon />, link: "#resume" },
    { label: "Contacts", icon: <ContactsIcon />, link: "#contacts" },
];


export const socialLinks = [
    { icon: <Facebook />, link: "https://www.facebook.com/ilonaskars/" },
    { icon: <Instagram />, link: "https://www.instagram.com/it_mamka" },
    { icon: <GitHub />, link: "https://github.com/IlonaSkargovskaia" },
    {
        icon: <LinkedIn />,
        link: "https://www.linkedin.com/in/ilona-skargovskaya/",
    },
];