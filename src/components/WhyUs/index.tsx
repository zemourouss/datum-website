import SectionTitle from "../Common/SectionTitle";
import WhyUsItem from "./WhyUsItem";
import whyUsData from "./whyUsData";

const Features = () => {
  return (
    <>
      <section id="features" className="py-16 md:py-20 lg:py-28">
        <div className="container">
          <SectionTitle
            title="Why Choose Us?"
            paragraph="At Datum, we're committed to delivering innovative solutions that make a real difference. Here's why we're the best choice for you"
            center
          />

          <div className="grid grid-cols-1 gap-x-8 gap-y-14 md:grid-cols-2 lg:grid-cols-3">
            {whyUsData.map((item) => (
              <WhyUsItem key={item.id} item={item} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Features;
