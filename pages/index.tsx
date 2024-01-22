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
import { useState } from 'react';

const DepthLayout = styled.div`
	display: grid;
	grid-template-rows: min-content;

	position: relative;
`

const PageLayout = styled.div`
	grid-row: 1 / 2;
	grid-column: 1 / 2;

	display: grid;
	grid-template-rows: 75px auto 50px;

	min-height: 100vh;

	z-index: 1;
`

export default function App() {

	const [activePicture, setActivePicture] = useState(null);
	
  	return (
		<BrowserRouter>
			<Head>
				<title>juystin.dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ScrollToTop />
				<GlobalTheme>
					<DepthLayout>
						{ activePicture ? <Picture activePicture={activePicture} setActivePicture={setActivePicture}/> : <></> }
						<PageLayout>
							<Header />
							<Routes>
								<Route path="/*" element={<Error404 />} />
								<Route path="/" element={<Home />} />
								<Route path="/projects" element={<Projects data={projectData}/>} />
								{ projectData.projects.map((project) => {
									return (
										<Route 
											path={"/projects/" + project.short} 
											element={<Project data={project}/>} />
									)
								}) }
								<Route path="/blogs" element={<Blogs data={blogData}/>} />
								{ blogData.blogs.map((blog) => {
									return (
										<Route 
											path={"/blogs/" + blog.id} 
											element={<Blog data={blog}/>} />
									)
								}) }
								<Route path="/pictures" element={<Pictures data={pictureData} activePicture={activePicture} setActivePicture={setActivePicture}/>} />
							</Routes>
							<Footer />
						</PageLayout>
					</DepthLayout>
				</GlobalTheme>
		</BrowserRouter>
  	);
}
