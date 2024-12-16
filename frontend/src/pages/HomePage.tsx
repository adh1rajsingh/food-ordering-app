import landing from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";

const HomePage = () => {
  return (
    <div className="flex flex-col gap-12">
      <div className="bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -mt-16">
        <h1 className="text-orange-500 text-5xl font-bold tracking-tight">
          Tuck into A Takeway Today
        </h1>
        <span className="text-xl">Food is just a click away</span>
      </div>
      <div className="grid md:grid-cols-2 gap-5 ">
        <img src={landing} />
        <div className="flex flex-col items-center justify-center gap-4 text-center">
          <span className="text-orange-500 text-3xl font-bold tracking-tighter">
            Order blazing food blazingly fast
          </span>
          <span>Download the app for Faster Ordering and Discounts</span>
          <img src={appDownloadImage} />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
