import { useEffect, useRef } from "react";
import "../style/album.css";

const ParallaxCard = ({ src, alt, title, tiltEffect }) => {
    const cardRef = useRef(null);

    useEffect(() => {
        const element = cardRef.current;
        if (!element) return;

        const container = element.querySelector(".container");
        const [w, h] = [300, 360];

        const handleMouseMove = (event) => {
            const { offsetX, offsetY } = event;
            let X, Y;

            if (tiltEffect === "reverse") {
                X = ((offsetX - w / 2) / 9);
                Y = (-(offsetY - h / 2) / 9);
            } else {
                X = (-(offsetX - w / 2) / 9);
                Y = ((offsetY - h / 2) / 9);
            }

            container.style.setProperty("--rY", X.toFixed(2));
            container.style.setProperty("--rX", Y.toFixed(2));
        };

        const handleMouseEnter = () => {
            container.classList.add("container--active");
        };

        const handleMouseLeave = () => {
            container.classList.remove("container--active");
            container.style.setProperty("--rY", 0);
            container.style.setProperty("--rX", 0);
        };

        element.addEventListener("mousemove", handleMouseMove);
        element.addEventListener("mouseenter", handleMouseEnter);
        element.addEventListener("mouseleave", handleMouseLeave);

        return () => {
            element.removeEventListener("mousemove", handleMouseMove);
            element.removeEventListener("mouseenter", handleMouseEnter);
            element.removeEventListener("mouseleave", handleMouseLeave);
        };
    }, [tiltEffect]);

    return (
        <div className="wrap" ref={cardRef}>
            <div className="container d-flex align-items-center">
                <div className="img-card">
                    <img src={src} alt={alt} className="album-image img-fluid pt-5 mt-3" />
                    <p className="text-center pt-4">{title}</p>
                </div>
              
            </div>
        </div>
    );
};

export default ParallaxCard;
