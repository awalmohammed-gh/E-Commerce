import Hero from "../components/common/Hero";
import Bestseller from "../components/common/Bestseller";
import Advert from "../components/card/Advert";
import FeaturedProduct from "../components/common/FeaturedProduct";
import AdvertTwo from "../components/card/AdvertTwo";
import Newsletter from "../components/common/Newsletter";

const Home = () => {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <Bestseller />
      </div>
      <Advert/>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <FeaturedProduct/>
      </div>
      <AdvertTwo/>
      <div className="">
        <Newsletter/>
      </div>
    </div>
  );
};

export default Home;