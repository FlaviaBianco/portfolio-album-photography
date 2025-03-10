import { PHOTOS } from "../data/photos";
import ParallaxCard from "../componentes/ParallaxCard";

export default function Album() {
    return (
        <div>
            <h1 className="text-center mb-3">My hobby</h1>
            <h3 className="text-center mt-4"><q>Album photography</q></h3>
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
