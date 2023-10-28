import Head from 'next/head';

import { useEffect, useState } from 'react';
import Header from '../components/header/Header';
import Navigation from '../components/nav/Navigation';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import Home from '../components/content/home/Home';
import Projects from '../components/content/projects/Projects';
import { useSpring } from 'react-spring';

export default function App() {

	const [navOpen, setNavOpen] = useState(false);
  	const [routeTransitioning, setRouteTransitioning] = useState(false);
  	const [activePage, setActivePage] = useState(() => {
		let path = window.location.pathname;

		if (path === "/projects") {
			return "projects";
		} else {
			return "home"
		}
	});

	const [headerFadeInAnimation, headerFadeInApi] = useSpring(() => ({
		config: {
            mass: 1,
            friction: 20,
            tension: 60,
        },
		from: {
			opacity: 0
		},
		to: {
			opacity: 1
		}
  	}))

  	const [homeAnimation, homeFadeInApi] = useSpring(() => ({
		config: {
            mass: 5,
            friction: 30,
            tension: 40,
        },
  	}))

	useEffect(() => {
		headerFadeInApi.start({
			from: {
				opacity: 0
			},
			to: {
				opacity: 1
			}
		})
	}, [])

	useEffect(() => {
		if (activePage === "home") {
			homeFadeInApi.start({
				from: {
					opacity: 0
				},
				to: {
					opacity: 1
				}
			})
		}
	}, [activePage]);

  	return (
		<BrowserRouter>
			<Head>
				<title>juystin.dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Header navOpen={navOpen} setNavOpen={setNavOpen} routeTransitioning={routeTransitioning} activePage={activePage} setActivePage={setActivePage} inAnimation={headerFadeInAnimation} homeFadeInApi={homeFadeInApi}/>
			<Routes>
				<Route path="/*" element={<Home activePage={activePage} routeTransitioning={routeTransitioning} setRouteTransitioning={setRouteTransitioning} animation={homeAnimation} api={homeFadeInApi}/>} />
				<Route path="/projects" element={<Projects />} />
			</Routes>
			<Navigation navOpen={navOpen} setNavOpen={setNavOpen} routeTransitioning={routeTransitioning} setRouteTransitioning={setRouteTransitioning} activePage={activePage} setActivePage={setActivePage} homeFadeInApi={homeFadeInApi}/>
		</BrowserRouter>
  	);
}
