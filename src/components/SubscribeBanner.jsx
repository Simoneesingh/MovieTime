import banner from "../asset/Banner.jpeg";

export default function SubscribeBanner() {
  return (
    <div className=" bg-cover flex justify-center mt-16 relative">
      <div className="relative h-72 lg:w-[60%] lg:h-96">
        <img
          src={banner}
          alt="banner"
          className="rounded-lg h-full filter brightness-50 w-[100%] shadow-2xl"
        />
        <div className="absolute left-8 top-1/2">
          <h1 className="text-white font-semibold text-2xl mb-2">
            Explore more with Premium
          </h1>
          <div className="flex  gap-4 items-center">
            <button className="bg-b2 text-b1 font-bold px-4 py-2 rounded-3xl  shadow-lg hover:scale-110">
              Subscribe Now
            </button>
            <span className="font-semibold text-b2">Only ₹179/Month</span>
          </div>
        </div>
      </div>
    </div>
  );
}
