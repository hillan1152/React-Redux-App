import React, {useState, useEffect} from 'react';
import Whirligig from 'react-whirligig';
import pic1 from '../images/barpic1.jpg';
import pic2 from '../images/barpic2.jpg';
import pic3 from '../images/barpic3.jpg';

export default function BarPicSlider() {
    let whirligig;
    const [pic, setPic] = useState([
        <img src={pic1} className="slides"/>,
        <img src={pic2} className="slides"/>,
        <img src={pic3} className="slides" />
    ])

    useEffect(() => {
        const interval = setInterval(() => {
            whirligig.next()
            // setPic(0)
        }, 10000)
        return () => clearInterval(interval)
        
    }, [])
    const next = () => whirligig.next();
    return (
        <div>
            <Whirligig
                visibleSlides={1}
                gutter="1em"
                ref={(_whirligigInstance) => { whirligig = _whirligigInstance}}
                infinite={true}
                animationDuration="7000"
                snapToSlide={true}
            >
                {pic[0]}
                {pic[1]}
                {pic[2]}
            </Whirligig>
            <button onClick={next}>Next</button>
        </div>
    )
}
