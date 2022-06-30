import aboutData from "./aboutData";

const About = (): JSX.Element => {
  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-icon mono-font">01</div>
        <div>
          <div className="title-wrapper">
            <div className="page-header bold-font">About</div>
          </div>
          <div className="page-desc reg-font">
            I'm Coltrane Yan, a Canadian software engineer. Currently I'm a dev
            contributor @ Airswap and programming in the Javascript and Solidity
            ecosystems.
          </div>
        </div>
      </div>
      <div className="data-wrapper">
        {aboutData.map((section) => (
          <div className="sub-section-wrapper">
            <div className="sub-heading-wrapper bold-font">
              {section.header}
            </div>
            <div>
              {section.content.map((line) => (
                <div className="reg-font">{line}</div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
