import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../../context/context';
import Title from '../Title/Title';
import YouTubePlayer from '../Players/YouTubePlayer';
import SpotifyPlayer from '../Players/SpotifyPlayer';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <section id="projects">
      <Container>
        <div className="project-wrapper">
          <Title title="Examples" />
          {projects.map((project) => {
            const {
              title,
              info,
              info2,
              videoUrl,
              spotifyUrl,
              id,
              primaryButtonText,
              primaryButtonUrl,
              secondaryButtonText,
              secondaryButtonUrl,
            } = project;

            return (
              <Row key={id}>
                <Col lg={4} sm={12}>
                  <Fade
                    left={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={500}
                    distance="30px"
                  >
                    <div className="project-wrapper__text">
                      <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                      <div>
                        <p>
                          {info ||
                            'Lorem ipsum dolor sit, amet consectetur adipisicing elit. Excepturi neque, ipsa animi maiores repellendu distinctioaperiam earum dolor voluptatum consequatur blanditiis inventore debitis fuga numquam voluptate architecto itaque molestiae.'}
                        </p>
                        <p className="mb-4">{info2 || ''}</p>
                      </div>
                      {primaryButtonText && (
                        <a
                          target="_blank"
                          rel="noopener noreferrer"
                          className="cta-btn cta-btn--hero"
                          href={primaryButtonUrl || '#!'}
                        >
                          {primaryButtonText}
                        </a>
                      )}

                      {secondaryButtonText && (
                        <Fade
                          left={isDesktop}
                          bottom={isMobile}
                          duration={1000}
                          delay={1000}
                          distance="30px"
                        >
                          <p className="hero-cta">
                            <span className="cta-btn cta-btn--hero">
                              <Link to={secondaryButtonUrl} smooth duration={1000}>
                                {secondaryButtonText || 'Know more'}
                              </Link>
                            </span>
                          </p>
                        </Fade>
                        // <a
                        //   target="_blank"
                        //   rel="noopener noreferrer"
                        //   className="cta-btn text-color-main"
                        //   href={secondaryButtonUrl || '#!'}
                        // >
                        //   {secondaryButtonText}
                        // </a>
                      )}
                    </div>
                  </Fade>
                </Col>
                <Col lg={8} sm={12}>
                  <Fade
                    right={isDesktop}
                    bottom={isMobile}
                    duration={1000}
                    delay={1000}
                    distance="30px"
                  >
                    <div className="project-wrapper__image">
                      <Tilt
                        options={{
                          reverse: false,
                          max: 8,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          {videoUrl && <YouTubePlayer url={videoUrl} />}
                          {spotifyUrl && <SpotifyPlayer url={spotifyUrl} />}
                        </div>
                      </Tilt>
                    </div>
                  </Fade>
                </Col>
              </Row>
            );
          })}
        </div>
      </Container>
    </section>
  );
};

export default Projects;
