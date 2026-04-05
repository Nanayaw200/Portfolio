import siteContent from "../../data/siteContent";

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__left">
          <h3 className="footer__brand">{siteContent.footer.copyrightName}</h3>
          <p className="footer__text">{siteContent.footer.copyrightText}</p>
        </div>

        <div className="footer__right">
          {siteContent.socialLinks.map((item) => (
            <a
              key={item.id}
              href={item.url}
              target="_blank"
              rel="noreferrer"
              className="footer__link"
            >
              {item.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;