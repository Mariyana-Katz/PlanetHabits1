import "./Hero.css";
import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng); //change the language
  };
  return (
    <header className="header">
      <div className="hero">
        <div className="container-xl text-center">
          <div className="row align-items-start">
            <div className="col-12">
              <div className="text-container px-5 pb-4 d-flex flex-column justify-content-start h-100 mb-5">
                <h3 className="name display-4 mt-5 pt-4">{t("tagline")}</h3>
                <h4 className="pb-5"></h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
