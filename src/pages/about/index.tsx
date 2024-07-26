import React from "react";
import { Content, } from "@carbon/react";
import aboutme from "./aboutme.json"

function AboutPage() {
    return (

        // <div className=" h-full w-full">

        <div className="pt-[10rem] px-[10rem] grid place-content-center">
            <div className="container border-double border-4 border-indigo-500 bg-gray-200 " >
                <div className="p-[1rem] whitespace-break-spaces">
                {aboutme[0].about}
                </div>
            </div>

            {/* <Content>
                <span>
                    Profile page.
                </span>
            </Content> */}
        </div>

        // </div>

    );
};


export default AboutPage;