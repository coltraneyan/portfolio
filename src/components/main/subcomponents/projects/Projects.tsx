import projectsData from "./projectsData";
import "./projects.css";

import toggleActive from "../../../functions/toggleActive";
import CanCan from "../../../../assets/cancan.svg";

import { IconContext } from "react-icons";

const Projects = (): JSX.Element => {
  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-icon mono-font">02</div>
        <div>
          <div className="title-wrapper">
            <div className="page-header bold-font">Projects</div>
          </div>
          <div className="page-desc reg-font">
            I enjoy building SPAs related to blockchain, UI and data, and often
            contribute to open-source materials.
          </div>
        </div>
      </div>

      <div className="data-wrapper">
        <div>
          {projectsData.map(
            (genre): JSX.Element => (
              <div className="sub-section-wrapper">
                <div className="sub-heading-wrapper bold-font">
                  {genre.type}
                </div>
                {genre.projectList.map(
                  (proj): JSX.Element => (
                    <div
                      className="proj-wrapper"
                      onClick={(e) =>
                        toggleActive(e.currentTarget as HTMLDivElement, "show")
                      }
                    >
                      <div className="proj-clickable">
                        <div className="header-wrapper">
                          <IconContext.Provider value={{ color: "darkgrey" }}>
                            {proj.projIcon}
                          </IconContext.Provider>
                          <div className="bold-font"> {proj.projName}</div>
                        </div>
                        <div className="plus">+</div>
                        <div className="minus">-</div>
                      </div>
                      <div className="proj-hidden">
                        <div className="proj-tech mono-font">
                          {proj.projTech}
                        </div>
                        <div className="mono-font">{proj.projDesc}</div>
                        <a
                          href={proj.projLink}
                          className="link-wrapper mono-font"
                        >
                          Link
                        </a>
                      </div>
                    </div>
                  )
                )}
              </div>
            )
          )}
          ;
        </div>
      </div>
    </div>
  );
};

export default Projects;
