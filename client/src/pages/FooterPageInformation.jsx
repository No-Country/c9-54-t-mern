import data from "../utils/dataFooter.js";
import Footer from "../components/footer/Footer.jsx";
import FilterBar from "../components/filterBar/FilterBar.jsx";
import { useParams } from "react-router-dom";

const FooterPageInformation = () => {
  const { idPage } = useParams();

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <div>
        <FilterBar />
        {data
          .filter((item) => item.title === idPage)
          .map((item) => (
            <div
              key={item.title}
              className="container m-auto px-4 bg-[#ebebeb]"
            >
              <h2 className="text-2xl w-full text-slate-900 mt-10">
                {item.title}
              </h2>
              <p className="mt-7 text-slate-600 text-justify mb-10">
                {item.description}
              </p>
            </div>
          ))}
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default FooterPageInformation;
