import { WhyUsItem as Item } from "@/types/whyUsItem";

const WhyUsItem = ({ item }: { item: Item }) => {
  const { icon, title, paragraph } = item;
  return (
    <div className="w-full">
      <div
        className="mb-10 flex h-[70px] w-[70px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary"
        data-aos="zoom-in"
      >
        {icon}
      </div>
      <h3
        className="mb-5 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl"
        data-aos="fade-up"
      >
        {title}
      </h3>
      <p
        className="pr-[10px] text-base font-medium leading-relaxed text-body-color"
        data-aos="fade-up"
      >
        {paragraph}
      </p>
    </div>
  );
};

export default WhyUsItem;
