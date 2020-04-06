import React, {useRef} from 'react';
import CustomLayout from '../components/layout';
import { Row, Col } from 'antd';

function About() {
  const aboutEl = useRef(null);
  const whatIdoEl = useRef(null);
  const talksEl = useRef(null);
  const getInTouchEl = useRef(null);

  const goToSection = (refName) => {
    console.log('test2', refName);
    refName.current.scrollIntoView({block: 'start', behavior: 'smooth' });

  }

  return (
    <CustomLayout>
      <Row gutter={16}>
        <Col span={4} className="sidebar-section">
          <div className="usr-img">
            <div className="u-img"></div>
          </div>
          <div className="abt-tabs-section">
            <p onClick={() => goToSection(aboutEl)}>About</p>
            <p onClick={() => goToSection(whatIdoEl)}>What I do</p>
            <p onClick={() => goToSection(talksEl)}>Talks</p>
            <p onClick={() => goToSection(getInTouchEl)}>Get in Touch</p>
          </div>
        </Col>
        <Col span={20}>
          <div className="abt-illustrations"></div>
          <div className="abt-content-section">
            <div className="abt-section-block" ref={aboutEl}>
              <div className="section-heading">About</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              
            </div>
            <div className="abt-section-block" ref={whatIdoEl}>
              <div className="section-heading">What I do</div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
            </div>
            <div className="abt-section-block" ref={talksEl}>
              <div className="section-heading">Talks</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
            <div className="abt-section-block" ref={getInTouchEl}>
              <div className="section-heading">Get in Touch</div>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </div>
          </div>      
        </Col>
      </Row>

    </CustomLayout>
  )
}

export default About;