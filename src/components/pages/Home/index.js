import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import './index.css';
export const Home = () => {
    return (
        <>
          <div className="banner-container">
              <div className="dim" />
              <div className="slogan-container">
                <div className="banner-text-1">
                    <p>New <span id="accent">Passion</span></p>
                </div>
                <div className="banner-text-2">
                    <p>Sharp <span id="accent">Identity</span></p>
                </div>
              </div>
              <div className="banner-front-image" />
              <div className="scroll-arrow">
                <FontAwesomeIcon className="arrow" icon={faArrowDown} />
              </div>
              <div className="social-links">
                  <p><a target="_blank" href="https://linkedin.com/in/rioananta">LinkedIn</a></p>
                  <div className="social-line" />
                  <p><a target="_blank" href="https://github.com/mhmdrioaf">Github</a></p>
                </div>
            </div>  
        </>
    )
}
