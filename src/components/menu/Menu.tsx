import React, { useState, useEffect } from "react";

const sections = [
  { id: "userProfile", text: "Profile" },
  { id: "searchUI", text: "Search UI" },
  { id: "review", text: "Reviews" },
  { id: "foods", text: "Foods" },
  { id: "noti", text: "Notifications" },
];

const FixedMenu: React.FC = () => {
  const [activeSection, setActiveSection] = useState<string>("userProfile");

  useEffect(() => {
    const handleScroll = () => {
      const sectionElements = sections.map((section) =>
        document.getElementById(section.id)
      );
      let currentSection = "userProfile";

      sectionElements.forEach((section) => {
        if (section) {
          const sectionTop =
            section.getBoundingClientRect().top + window.scrollY;
          const sectionHeight = section.offsetHeight;
          const scrollPos = window.scrollY;

          if (
            scrollPos >= sectionTop - 100 &&
            scrollPos < sectionTop + sectionHeight
          ) {
            currentSection = section.id;
          }
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop - 50,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="fixed z-20 bottom-4 left-1/2 transform -translate-x-1/2 w-full max-w-md flex justify-center">
      <div className="relative flex flex-col space-y-2">
        <nav className="relative flex justify-center">
          <ul className="flex space-x-2 bg-white p-2 rounded-full shadow-lg pr-3">
            {sections.map(({ id, text }) => (
              <li
                key={id}
                className={`relative font-semibold cursor-pointer p-2 rounded-full transition-transform transform ${
                  activeSection === id
                    ? "bg-[#0C0E41] text-white scale-110"
                    : "text-black"
                }`}
                onClick={() => scrollToSection(id)}
              >
                {text}
                {activeSection === id && (
                  <div className="absolute inset-0 bg-blue-500 opacity-25 rounded-full"></div>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default FixedMenu;
