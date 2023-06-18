import { VerticalTimelineElement } from "react-vertical-timeline-component";
const ExperienceCard = ({ item }) => {
  //   console.log("itkndfefhehjsrbghjem", item);
  return (
    <>
      <VerticalTimelineElement
        contentStyle={{
          background: "#eaeaec",
          color: "#292929",
          boxShadow:
            "rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
        }}
        contentArrowStyle={{
          borderRight: "7px solid  #232631",
        }}
        date={
          <div>
            <h3 className="text-dim text-[18px] font-bold font-beckman">
              {item?.date}
            </h3>
          </div>
        }
        iconStyle={{ background: item.iconBg }}
        icon={
          <div className="flex justify-center items-center w-full h-full">
            <img
              src={item.icon}
              alt={item.company_name}
              className="w-[60%] h-[60%] object-contain"
            />
          </div>
        }
      >
        <div>
          <h3 className="text-jetLight text-[24px] font-bold font-beckman tracking-[2px]">
            {item.title}
          </h3>
          <p
            className="text-taupe text-[22px] font-semibold font-overcameBold tracking-[1px]"
            style={{ margin: 0 }}
          >
            {item.company_name}
          </p>
        </div>
      </VerticalTimelineElement>{" "}
    </>
  );
};
export default ExperienceCard;
