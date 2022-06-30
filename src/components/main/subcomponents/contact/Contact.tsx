import contactData from "./contactData";

import "./contact.css";

const Contact = (): JSX.Element => {
  return (
    <div>
      <div className="page-header-wrapper">
        <div className="page-icon mono-font">04</div>
        <div>
          <div className="title-wrapper">
            <div className="page-header bold-font">Contact</div>
          </div>
          <div className="page-desc reg-font">
            Feel free to check out my pages below, and reach out to me via
            email.
          </div>
        </div>
      </div>

      <div className="data-wrapper">
        {contactData.map((channel) => (
          <div className="sub-section-wrapper">
            <div className="sub-heading-wrapper bold-font">{channel.type}</div>
            <div className="link-wrapper">
              {channel.reactIcon}
              <a href={channel.info} className="mono-font">
                {channel.anchorText}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contact;
