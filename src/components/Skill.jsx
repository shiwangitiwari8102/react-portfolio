import React from "react";

const Skill = ({ skills }) => {
  if (!skills) return <p></p>;

  return (
    <section
      id="skills"
      className="skill-area-two relative z-10 pt-20 md:pt-32 lg:pt-52 pb-20 md:pb-32 lg:pb-52"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="md:col-span-1">
            <div className="skill-content-two relative z-10 mb-10 md:mb-20 text-center md:text-left">
              <div className="mb-10 md:mb-20">
                <span className="text-gray-500 mb-3 block">
                  <i className="flaticon-asterisk-1" /> Professional Skill of Me
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold">Professional Skill</h2>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-1 gap-6 md:gap-0 justify-items-center md:justify-items-start">
                <div className="col-span-1">
                  <img src="src/public/assets/images/skills/skill-man.png" alt="Skill" />
                </div>
                <div className="col-span-1">
                  <img src="src/public/assets/images/shape/skill-arrow.png" alt="Arrow" />
                </div>
              </div>
            </div>
          </div>
          <div className="md:col-span-1">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {skills
                .sort((a, b) => a.sequence - b.sequence)
                .slice(0, 9)
                .map((item) => (
                  <div key={item.id} className="col-span-1">
                    <div className="skill-item-two relative wow fadeInUp delay-0-3s">
                      <div className="icon-percent">
                        <img src={item.image.url} alt="Skill" />
                        <span className="percent">{item.percentage}%</span>
                      </div>
                      <h5 className="title">{item.name}</h5>
                    </div>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </div>
      <div className="bg-lines">
        {[...Array(10)].map((_, index) => (
          <span key={index} />
        ))}
      </div>
    </section>
  );
};

export default Skill;
