import { PHOTOS } from "../data/photos";
import ParallaxCard from "../componentes/ParallaxCard";
import { Link } from "react-router-dom";

export default function Album() {
    return (
        <div>
            <h1 className="text-center mb-3">My hobby</h1>
            <h3 className="text-center mt-4"><q>Album photography</q></h3>
            <Link to='/portfolio-album-photography' className="position-end position-absolute top-0 end-0 me-5">
                <button className="btn btn-outline-light mt-5 mb-2">Voltar</button>
            </Link>
            <section className="main">
                {PHOTOS.map((photo, index) => (
                    <ParallaxCard 
                        key={index} 
                        src={photo.src} 
                        alt={photo.alt} 
                        title={photo.title} 
                        tiltEffect={photo.tiltEffect}
                        className={`wrap--${index + 1}`}
                    />
                ))}
            </section>
        </div>
    );
}
