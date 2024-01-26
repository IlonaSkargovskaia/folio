import React from "react";
import IconBlocks from "./IconBlocks";
import Header from "./Header";
import SkillsBlock from "./SkillsBlock";
import Education from "./Education";
import WorkExperience from "./WorkExperience";
import Contacts from "./Contacts";
import Portfolio from "./Portfolio";

const RightColumn = () => {
    return (
        <>
            <Header />

            <main>
                <IconBlocks />
                <SkillsBlock />
                <Portfolio />

                <section className="my-row work" id="resume">
                    <div className="col-65">
                        <WorkExperience />
                    </div>
                    <div className="col-25">
                        <Education />
                        <Contacts />
                    </div>
                </section>
            </main>
        </>
    );
};

export default RightColumn;
