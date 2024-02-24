import Head from 'next/head';

import Header from '../components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/content/home/Home';
import Projects from '../components/content/projects/Projects';
import Footer from '../components/footer/Footer';
import styled, { ThemeProvider } from 'styled-components';
import ScrollToTop from '../components/utility/ScrollToTop';
import Blogs from '../components/content/blogs/Blogs';
import Blog from '../components/content/blogs/Blog';
import Pictures from '../components/content/pictures/Pictures';
import Project from '../components/content/projects/Project';
import Error404 from '../components/content/error404/Error404';

import projectData from "../public/data/projects.json"
import blogData from "../public/data/blogs.json"
import pictureData from "../public/data/pictures.json"
import GlobalTheme from '../styles/GlobalTheme';
import Picture from '../components/content/pictures/Picture';
import { useEffect, useState } from 'react';
import { device } from '../styles/devices';
import { usePreserveScroll } from '../components/utility/PreserveScrollOnBack';

const DepthLayout = styled.div`
	position: relative;

	grid-template-rows: 1fr;
`

const PageLayout = styled.div`
	grid-row: 1 / 2;
	grid-column: 1 / 2;

	z-index: 1;

	min-height: 100vh;
	width: auto;

	display: grid;
	grid-template-rows: 90px auto 30px;

	box-sizing: border-box;

	padding: 0 20px;

	overflow-x: clip;

	@media ${device.tablet} {
		grid-template-rows: 90px auto 50px;
	}

	@media ${device.laptop} { 
        grid-template-rows: 90px auto 50px;
    }
`

export default function App() {

	const [activePicture, setActivePicture] = useState(null);

	usePreserveScroll()
	
	return (
		<BrowserRouter>
			<Head>
				<title>juystin.dev</title>
				<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
				<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
				<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
				<link rel="manifest" href="/site.webmanifest" />
				<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#EAEAEA" />
				<meta name="msapplication-TileColor" content="#ffffff" />
				<meta name="theme-color" content="#000505" />
				<meta name="apple-mobile-web-app-status-bar-style" content="#000505"></meta>
			</Head>
			<ScrollToTop />
			<GlobalTheme>
				<DepthLayout>
					{activePicture ? <Picture activePicture={activePicture} setActivePicture={setActivePicture} /> : <></>}
					<PageLayout>
						<Header />
						<Routes>
							<Route path="/*" element={<Error404 />} />
							<Route path="/" element={<Home />} />
							<Route path="/projects" element={<Projects data={projectData} />} />
							{projectData.projects.map((project) => {
								return (
									<Route
										path={"/projects/" + project.short}
										element={<Project data={project} />} />
								)
							})}
							<Route path="/blogs" element={<Blogs data={blogData} />} />
							{blogData.blogs.map((blog) => {
								return (
									<Route
										path={"/blogs/" + blog.id}
										element={<Blog data={blog} />} />
								)
							})}
							<Route path="/pictures" element={<Pictures data={pictureData} activePicture={activePicture} setActivePicture={setActivePicture} />} />
						</Routes>
						<Footer />
					</PageLayout>
				</DepthLayout>
			</GlobalTheme>
		</BrowserRouter>
	);
}
