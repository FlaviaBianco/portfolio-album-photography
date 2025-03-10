import { Link } from "react-router-dom";
import "../style/app.css";
import '../style/PhotoAlbum.css';
import React, { useState, useEffect } from 'react';
import { sections } from "../data/sections";

function App() {
    const [cursorStyle, setCursorStyle] = useState({
        left: '-100px',
        top: '50%',
      });
    
      const handleMouseMove = (e) => {
        setCursorStyle({
          left: `${e.clientX}px`,
          top: `${e.clientY}px`,
        });
      };
    
      useEffect(() => {
        document.body.addEventListener('mousemove', handleMouseMove);
        return () => {
          document.body.removeEventListener('mousemove', handleMouseMove);
        };
      }, []);
    
      return (
        <div className="App">
          {/* Cursor */}
          <div className="cursor" style={cursorStyle}></div>
          <div className="cursor2" style={cursorStyle}></div>
          <div className="cursor3" style={cursorStyle}></div>
    
          {/* Renderizando as seções com map */}
          <div className="backgroud hero-section"></div>
          <div className="text container-fluid">
          <div class="text-center name">
						<h1>Flávia Bianco</h1>
            <div class="dancing">Photography</div>
					</div> 
        
						
				
          {sections.map((section, index) => (
            <section
              key={section.id}
              id={section.id}
              className={`section ${section.id}-section`}
             
            >
              <div className="section-center">
                <h3>{section.title}</h3>
                <p>{section.description}</p>
              </div>
            </section>
          ))}

        <Link to="/album">
          <img width="64" height="64" src="https://img.icons8.com/nolan/64/chevron-down.png" alt="chevron-down"/>
        </Link>
        </div>
          {/* Link to portfolio */}
          <a href="https://www.instagram.com/flavinha_bianco?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==" className="link-to-instagram" target="_blank"></a>
        </div>

      );
    }
    
    export default App;