import { useEffect, useState } from "react";
import { animated, useSpring } from "react-spring";

const SpecialHamburger = ({color, navOpen, setNavOpen, routeTransitioning}) => {

    const [midAnimation, midApi] = useSpring(() => ({
        fill: "none",
        stroke: "#E2271E",
        strokeWidth: "0.595312",
        strokeDasharray: "3.9",
        strokeDashoffset: "0",
        strokeOpacity: "1",
        d: "M 1.2075125,3.175 H 3.6862369 5.1424874",
        width: "100%",
        opacity: !navOpen ? "0" : "1",
    }));

    const [topAnimation, topApi] = useSpring(() => ({
        fill: "none",
        stroke: "#E2271E",
        strokeWidth: "0.595312",
        strokeDasharray: "3.9 10",
        strokeDashoffset: "0",
        strokeOpacity: "1",
        d: "m 1.2075125,1.6867185 h 2.4787244 1.4562505 c 0,0 0.1647014,0.2400487 0.211431,0.338442 0.4013731,0.845127 0.4577479,1.4002138 0.49174,1.8994865 C 5.8901783,4.5785515 5.704334,5.1597781 5.5564738,5.1846652 5.331132,5.2225936 5.112369,4.9987608 5.112369,4.9987608 L 1.1980501,1.3013303"
    }));

    const [botAnimation, botApi] = useSpring(() => ({
        fill: "none",
        stroke: "#E2271E",
        strokeWidth: "0.595312",
        strokeDasharray: "3.9 10",
        strokeDashoffset: "0",
        strokeOpacity: "1",
        d: "m 1.2076318,4.6632815 h 2.4787244 1.4562505 c 0,0 0.1647014,-0.2400487 0.211431,-0.3384419 C 5.7554108,3.4797126 5.8117856,2.9246257 5.8457777,2.4253531 5.8902976,1.7714485 5.7044533,1.1902219 5.5565931,1.1653348 5.3312513,1.1274064 5.1124883,1.3512392 5.1124883,1.3512392 L 1.1981694,5.0486698"
    }));

    useEffect(() => {
        midApi.start({
            to: {
                strokeDashoffset: !navOpen ? "0" : "-3.9",
                opacity: !navOpen ? "1" : "0",
            }
        })
        topApi.start({
            to: {
                strokeDashoffset: !navOpen ? "0" : "-8.1",
                strokeDasharray: !navOpen ? "3.9 10" : "5.5 10",
            }
        })
        botApi.start({
            to: {
                strokeDashoffset: !navOpen ? "0" : "-8.1",
                strokeDasharray: !navOpen ? "3.9 10" : "5.5 10",
            }
        })
    }, [navOpen]);

    return ( 
        <svg
            width="24"
            height="24"
            viewBox="0 0 6.3499999 6.35"
            xmlns="http://www.w3.org/2000/svg"
            onClick={() => {
                if (!routeTransitioning) {
                    setNavOpen(!navOpen)
                }
            }}
            >
            <animated.path
                {...midAnimation}
            />
            <animated.path
                {...topAnimation}
            />
            <animated.path
                {...botAnimation}
            />
        </svg>
    );
}
 
export default SpecialHamburger;