import React from "react";
import { Gallery, GalleryImage } from "react-gesture-gallery";
import ProjectInfo from '../Items/ProjectInfo'
import '../main.scss'


const Slider = ({info, images}) => {
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const timer = setInterval(() => {
            if (index === images.length - 1) {
                setIndex(0);
            } else {
                setIndex(prev => prev + 1);
            }
        }, 5000);
        return () => clearInterval(timer);
    }, [index]);

    return (
        <div className="GamesInfo">
            <Gallery
                style={{
                    background: "#ffffff27",
                    height: "500px",
                    width: "700px"
                }}
                index={index}
                onRequestChange={i => {
                    setIndex(i);
                    console.log(i);
                }}
            >
                {images.map(image => (
                    <GalleryImage objectFit="contain" key={image} src={image} />
                ))}
            </Gallery>
            <ProjectInfo title={info[index].title} description={info[index].description} git={info[index].git} itch={info[index].itch}/>
        </div>
    );
}

export default Slider;