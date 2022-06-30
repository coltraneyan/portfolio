import previousData from "./previousData";

const Previous = (): JSX.Element => {
  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-icon mono-font">03</div>
        <div>
          <div className="title-wrapper">
            <div className="page-header bold-font">Previous</div>
          </div>
          <div className="page-desc reg-font">
            Some of my past pursuits and accomplishments, related and unrelated
            to programming.
          </div>
        </div>
      </div>

      <div className="data-wrapper">
        {previousData.map((type) => (
          <div className="sub-section-wrapper">
            <div className="sub-heading-wrapper bold-font">{type.header}</div>
            {type.content.map((entry) => (
              <div className="content-wrapper">
                <div className="bold-font">{entry.entity}</div>
                <div className="reg-font">{entry.desc}</div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Previous;
