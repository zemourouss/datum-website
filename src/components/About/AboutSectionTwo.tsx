import Image from "next/image";
import SectionTitle from "../Common/SectionTitle";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4 lg:w-1/2">
            <SectionTitle title="How We Work" paragraph="" mb="64px" />
            <div className="relative mx-auto mb-12 max-w-[500px] text-center lg:m-0">
              <Image
                src="/images/about/image.png"
                alt="about image"
                layout="responsive"
                width={1200}
                height={800}
                data-aos="zoom-in-right"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-1/2">
            <div className="max-w-[470px]">
              <div className="mb-9" data-aos="fade-up">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Assessment
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We begin by thoroughly understanding your current operations,
                  challenges, and goals. This in-depth assessment enables us to
                  design solutions tailored to your unique needs.
                </p>
              </div>
              <div className="mb-9" data-aos="fade-up">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Solution Design
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our team of experts develops comprehensive solutions that
                  integrate the latest technologies, ensuring you achieve
                  maximum value and effectiveness.
                </p>
              </div>
              <div className="mb-9" data-aos="fade-up">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Implementation
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  We collaborate with you to seamlessly integrate our solutions
                  into your existing infrastructure. Our approach ensures a
                  smooth transition, with your team fully equipped to leverage
                  the new tools effectively.
                </p>
              </div>
              <div className="mb-1" data-aos="fade-up">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Ongoing Support
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  Our commitment to your success extends beyond implementation.
                  We provide continuous support, updates, and enhancements to
                  keep your operations at the cutting edge of innovation.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
