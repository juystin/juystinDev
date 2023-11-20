import Head from 'next/head';

import Header from '../components/header/Header';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from '../components/content/home/Home';
import Projects from '../components/content/projects/Projects';
import Footer from '../components/footer/Footer';
import styled from 'styled-components';
import ScrollToTop from '../components/utility/ScrollToTop';
import Blogs from '../components/content/blogs/Blogs';
import Pictures from '../components/content/pictures/Pictures';

const PageLayout = styled.div`
	display: grid;
	grid-template-rows: 75px auto 50px;
`

export default function App() {

  	return (
		<BrowserRouter>
			<Head>
				<title>juystin.dev</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<ScrollToTop />
			<PageLayout>
				<Header />
				<Routes>
					<Route path="/*" element={<Home />} />
					<Route path="/projects" element={<Projects />} />
					<Route path="/blogs" element={<Blogs />} />
					<Route path="/pictures" element={<Pictures />} />
				</Routes>
				<Footer />
			</PageLayout>
		</BrowserRouter>
  	);
}
