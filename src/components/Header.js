import React, { useEffect, useRef, useCallback } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
  faGithub,
  faLinkedin,
  faMedium,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons";
import { Box, HStack } from "@chakra-ui/react";

const socials = [
  {
    icon: faEnvelope,
    url: "mailto: hello@example.com",
  },
  {
    icon: faGithub,
    url: "https://github.com",
  },
  {
    icon: faLinkedin,
    url: "https://www.linkedin.com",
  },
  {
    icon: faMedium,
    url: "https://medium.com",
  },
  {
    icon: faStackOverflow,
    url: "https://stackoverflow.com",
  },
];

const Header = () => {
  const headerRef = useRef(null);
  const handleSectionNavigationClick = useCallback((event) => {
    const section = event.target.dataset.section;
    const sectionSelector = `#${section}-section`;
    const element = document.querySelector(sectionSelector);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
        window.addEventListener('scrollend', () => {
            headerRef.current.style.transform = "translateY(-200px)";
        }, {
            once: true,
            passive: true,
        });
    }
  }, []);

  useEffect(() => {
    
    let scrollPos = window.scrollY;
    
    const handleScroll = () => {
        if (!headerRef.current) {
            return;
        }
        const currentScrollY = window.scrollY;
        if (currentScrollY < scrollPos) {
            headerRef.current.style.transform = "translateY(0)";
        } else if (currentScrollY > scrollPos) {
            headerRef.current.style.transform = "translateY(-200px)";
        }
        scrollPos = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  return (
    <Box
      position="fixed"
      top={0}
      left={0}
      right={0}
      translateY={0}
      transitionProperty="transform"
      transitionDuration=".3s"
      transitionTimingFunction="ease-in-out"
      backgroundColor="#18181b"
      ref={headerRef}
    >
      <Box color="white" maxWidth="1280px" margin="0 auto">
        <HStack
          px={16}
          py={4}
          justifyContent="space-between"
          alignItems="center"
        >
          <nav>
            <HStack spacing={8}>
                {socials.map(({icon, url}) => <a key={icon.iconName} href={url}><FontAwesomeIcon icon={icon} size="2x" /></a>)}
            </HStack>
          </nav>
          <nav>
            <HStack spacing={8}>
              <a href="/#projects" data-section="projects" onClick={handleSectionNavigationClick}>Projects</a>
              <a href="/#contact-me" data-section="contactme" onClick={handleSectionNavigationClick}>Contact Me</a>
            </HStack>
          </nav>
        </HStack>
      </Box>
    </Box>
  );
};
export default Header;
