import MaxWidthContainer from "../MaxWidthContainer/MaxWidthContainer";
import StyledHeading from "../StyledHeading/StyledHeading";

const ParallaxSection = ({ platformSectionData }) => {
  const positions = [
    { pos: "bottom-[750px] left-0 lg:bottom-[73.14%] lg:left-[27.5%]" },
    { pos: "bottom-[600px] right-0 lg:bottom-[63.58%] lg:right-[31.25%]" },
    { pos: "bottom-[450px] left-0 lg:bottom-[45%] lg:left-[80%]" },
    { pos: "bottom-[300px] right-0 lg:bottom-[37.2%] lg:right-[76.11%]" },
    { pos: "bottom-[150px] left-0 lg:bottom-[20.24%] lg:left-[63%]" },
    { pos: "bottom-[0px] right-0 lg:bottom-[11.45%] lg:right-[51%]" },
  ];

  return (
    <section
      className="relative lg:pb-0"
      role="region"
      aria-label="Resource Platforms"
    >
      <MaxWidthContainer>
        <div className="h-[581px] sm:h-[734px] flex items-center justify-center bg-white sticky top-0">
          {platformSectionData?.mainHeading && (
            <StyledHeading
              styledHeadingData={platformSectionData?.mainHeading}
            />
          )}
        </div>
        <article className="h-[870px] relative flex items-end justify-center gap-8 mx-5 lg:mx-0 pb-10 lg:pb-0">
          {platformSectionData?.resourceCard?.length > 0 &&
            platformSectionData?.resourceCard.map((resource, index) => {
              return (
                <div
                  key={index}
                  className={`absolute flex flex-col items-center justify-center gap-2 text-center min-h-[120px] w-[120px] md:w-[180px] md:min-h-[180px] bg-[#EDEDED]/40 rounded-2xl 
              ${positions[index].pos}
              `}
                  style={{ backdropFilter: `blur(10px)` }}
                  aria-label={`${resource.title} resource section`}
                >
                  <div
                    className={`grid items-center gap-1 text-4xl`}
                    style={{
                      gridTemplateColumns: `${
                        resource?.media?.length == 1 ? "1fr" : "1fr 1fr"
                      }`,
                    }}
                  >
                    {resource?.media?.length > 0 &&
                      resource?.media.map((item, iconIndex) => (
                        <span
                          key={iconIndex}
                          className="w-[33.33px] h-[33.33px] sm:w-[50px] sm:h-[50px] rounded-[20px] overflow-hidden"
                        >
                          <img
                            src={item?.image?.url}
                            className="flex object-contain w-full h-full"
                            alt={item?.image?.alternativeText || "image"}
                          />
                        </span>
                      ))}
                  </div>
                  <h2 className="text-[13.33px] md:text-[20px] font-semibold text-coregray-300 ">
                    {resource.heading}
                  </h2>
                </div>
              );
            })}
        </article>
      </MaxWidthContainer>
    </section>
  );
};

export default ParallaxSection;
