import {
    SideNav, SideNavDivider, SideNavItems, SideNavLink,
  } from "@carbon/react";
  import {
    LogoLinkedin,
    UserProfile,
    Home,
  } from "@carbon/icons-react";
  
  import WSM from "../components/WSM.svg"

  function Navigation() {
     return (<>
   
      <SideNav aria-label="Side navigation" isRail>
      <div className="bg-blue-300 h-full">
        <SideNavItems>
        <SideNavLink
            renderIcon={Home}
            href="/homepage">
              Home
          </SideNavLink>
        <SideNavLink
            renderIcon={UserProfile}
            href="/about">
              About
          </SideNavLink>
          <SideNavDivider />
          <div className="flex pl-[1rem] flex-row ">
          <img src= {WSM} alt={"Strongman"} width={16} height={16} />
          <SideNavLink
            // renderIcon={WSM}
            href="https://strengthresults.com/statistics/profiles/9c41-bde0-45a7-aadf-e8d17b931149">
           Strongman
          </SideNavLink>
          </div>
          <SideNavDivider />
          <SideNavLink
            renderIcon={LogoLinkedin}
            href="https://www.linkedin.com/in/pandora-holladay-b01a241a9/">
              Linkedin
          </SideNavLink>
        </SideNavItems>
        </div>
      </SideNav>;

    </>
    );
    
  }
  
  export default Navigation;