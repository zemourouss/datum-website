import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const Products = () => {
  return (
    <section id="products" className="relative z-10 py-16 md:py-20 lg:py-28">
      <div className="container">
        <SectionTitle
          title="Datum Ads Boards Platform"
          paragraph="With Datumconnect, you can connect with the right opportunities, manage your campaigns effectively, and unlock the full potential of your advertising spaces."
          center
          width="680px"
        />

        <div className="-mx-4 flex flex-wrap">
          <div className="flex w-full flex-col items-center justify-center px-4 lg:w-1/2">
            <div className="relative mx-auto mb-12 aspect-[25/24] w-full max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/products/datumConnect.svg"
                alt="about image"
                fill
                data-aos="zoom-in-up"
              />
            </div>
            <p
              className="max-w-[500px] text-center text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed"
              data-aos="zoom-in-up"
            >
              DatumConnect is an innovative platform that transforms how
              advertising spaces—ranging from digital screens to traditional
              billboards—are rented and managed. Tailored to meet the needs of
              both advertisers and board owners, DatumConnect offers a seamless,
              intuitive experience that simplifies the entire process from
              discovery to deployment.
            </p>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[500px]">
              <div className="mb-9" data-aos="fade-left">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  For advertisers
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  DatumConnect provides a vast catalog of available advertising
                  boards worldwide. Users can easily explore options based on
                  location, board type, size, visibility, and pricing. The
                  platform’s interactive map feature offers a visual overview,
                  helping advertisers select the ideal spots for their campaigns
                  with ease. Whether you need a digital screen in a bustling
                  urban area or a traditional billboard on a major highway,
                  DatumConnect makes finding and booking the perfect space
                  effortless.
                </p>
              </div>
              <div className="mb-9" data-aos="fade-left">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Board owners
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  If you are a board(s) owner, you can benefit from DatumConnect
                  robust set of tools designed to maximize the potential of
                  their advertising assets. Receive instant notifications of
                  rental requests, negotiate directly with advertisers, and
                  manage your inventory efficiently. DatumConnect also automates
                  key processes like contract generation and payment collection,
                  ensuring a hassle-free experience for both parties.
                </p>
              </div>
              <div className="mb-1" data-aos="fade-left">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Key features
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Dynamic pricing capabilities, automated contract creation with
                  digital signatures, and powerful reporting tools that provide
                  insights into board utilization and financial performance. The
                  platform’s user-friendly interface is designed to make every
                  step straightforward and efficient, whether you’re renting ad
                  space or managing it.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 z-[-1] h-full w-full bg-[url(/images/video/shape.svg)] bg-cover bg-center bg-no-repeat"></div>
    </section>
  );
};

export default Products;
