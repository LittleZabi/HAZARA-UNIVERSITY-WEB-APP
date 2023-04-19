<script lang="ts">
	import vid from '$img/hazara-uni.mp4';
	import hazaraGate from '$img/hazara-gate.jpg';
	import huView from '$img/hu-view.jpg';
	import eye from '$img/eye.png';
	import handIcon from '$img/hand.png';
	import searchIcon from '$img/search.svg';
	import { viewport } from '../lib/__libs__';
</script>

<div class="page-size home-view flex-center align-start">
	<div class="left">
		<div class="home-left-xxz">
			<ul>
				<li>
					<svg
						viewBox="0 0 24 24"
						fill="none"
						shape-rendering="geometricPrecision"
						stroke="currentColor"
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="1.5"
						><circle cx="12" cy="5" r="3" /><path d="M12 22V8" /><path
							d="M5 12H2a10 10 0 0020 0h-3"
						/></svg
					>
				</li>
				<li>
					<a href="/"> Menu </a>
				</li>
				<li>
					<a href="/"> Search </a>
				</li>
				<li>
					<a href="/"> New & Events </a>
				</li>
				<li>
					<a href="/"> VC Message </a>
				</li>
				<li>
					<a href="/"> Downloads </a>
				</li>
				<li>
					<a href="/"> Degree Verification </a>
				</li>
				<li>
					<a href="/"> Faculty Login </a>
				</li>
				<li>
					<a href="/"> Student Affairs </a>
				</li>
			</ul>
		</div>
	</div>
	<div class="right">
		<h2 class="right-top">WELCOME TO HAZARA UNIVERSITY</h2>
		<div class="video-content">
			<video autoplay={true} loop={true} preload="auto" poster={hazaraGate} muted={true}>
				<source type="video/mp4" src={vid} />
			</video>
			<button class="button-view-x">
				EXPLORE MORE
				<svg
					viewBox="0 0 24 24"
					class="text-black dark:text-white transform-gpu transition-all duration-300 ease-in-out w-8"
					fill="none"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z" /></svg
				>
			</button>
		</div>
		<div class="view-text">
			Welcome to our esteemed university's website, where education meets opportunity. Our
			commitment to excellence in higher learning is reflected in our diverse range of academic
			programs and experienced faculty. Our campus is a vibrant community of students, faculty, and
			staff from around the world, providing a unique and inclusive environment for personal and
			intellectual growth. Whether you're a prospective student, current student, or alumni, our
			website offers a wealth of information about our programs, resources, and events. Explore our
			site to discover why our university is the best choice for your academic journey.
		</div>
		<h2 class="home-header-2">We thrive at the intersection of the best…</h2>
		<div class="home-circle">
			<section>
				<img src={eye} alt="eye icon" />
				<h5>STRATEGIC VISION</h5>
				<p>
					Site offers a wealth of information about oite to discover why our univer for personal and
					intellectual growth.
				</p>
			</section>
			<section>
				<img src={handIcon} alt="eye icon" />
				<h5>UNIVERSITY LIFE</h5>
				<p>
					Site offers a wealth of information about oite to discover why our univer for personal and
					intellectual growth.
				</p>
			</section>
			<section>
				<img src={eye} alt="eye icon" />
				<h5>STRATEGIC VISION</h5>
				<p>
					Site offers a wealth of information about oite to discover why our univer for personal and
					intellectual growth.
				</p>
			</section>
			<section>
				<img src={eye} alt="eye icon" />
				<h5>STRATEGIC VISION</h5>
				<p>
					Site offers a wealth of information about oite to discover why our univer for personal and
					intellectual growth.
				</p>
			</section>
		</div>
		<div class="flex-center home-button-view">
			<a href="/">ACADEMIC PROGRAMES</a>
			<a href="/">ADMISSIONS</a>
			<a href="/">HOSTELS</a>
			<a href="/">HU IN THE COMMUNITY</a>
			<a href="/">SCHOLARSHIPS</a>
			<a href="/">FINANCIAL AIDs</a>
		</div>
		<div class="lower-third-x">
			<h4>HU AT GLANCE</h4>
			<h2>
				HAZARA UNIVERSITY IN ONE LOOK
				<svg
					viewBox="0 0 24 18"
					class="text-black dark:text-white transform-gpu transition-all duration-300 ease-in-out w-8"
					fill="none"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"><path d="M20 6L9 17l-5-5" /></svg
				>
			</h2>
			<p>
				Hazara University intends to be a standard university providing affordable quality
				educational opportunities for students to develop scientific, socio-culture, economic and
				political leadership, through learner-centred teaching and research, while strengthening
				their identity at Regional, National and International level.
			</p>
		</div>
		<div class="lower-4th-x">
			<button class="button-view-x">
				ABOUT US
				<svg
					viewBox="0 0 24 24"
					class="text-black dark:text-white transform-gpu transition-all duration-300 ease-in-out w-8"
					fill="none"
					shape-rendering="geometricPrecision"
					stroke="currentColor"
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="1.5"><path d="M5 12h14" /><path d="M12 5l7 7-7 7" /></svg
				>
			</button>
			<img src={huView} alt="hu view" />
		</div>
	</div>
</div>
<dic
	class="sec-x-69"
	use:viewport
	on:enterViewport={() => {document.querySelector('.home-left-xxz')?.classList.add('to-top-x3');document.querySelector('.home-left-xxz')?.classList.remove('scrolled')}}
	on:exitViewport={() => {document.querySelector('.home-left-xxz')?.classList.remove('to-top-x3');document.querySelector('.home-left-xxz')?.classList.add('scrolled')}}
>
	<div class="search">
		<input type="search" placeholder="SEARCH PROGRAMS..." />
		<svg
			xmlns="http://www.w3.org/2000/svg"
			xmlns:xlink="http://www.w3.org/1999/xlink"
			aria-hidden="true"
			viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14z"
			/></svg
		>
	</div>
	<div class="x-text">
		<a href="/">HU-CMS</a>
		<a href="/">HU-LMS</a>
		<a href="/">ORIC</a>
		<a href="/">QEC</a>
		<a href="/">HU MAIL</a>
		<a href="/">HEC DIGITAL</a>
		<a href="/">LIBRARY</a>
	</div>
</dic>

<style lang="scss">
	.sec-x-69 {
		margin: 87px auto 14px auto;
		display: block;
		text-align: center;
		& .search {
			margin: auto;
			width: 60%;
			border: 2px solid #ffffff52;
			border-radius: 37px;
			display: flex;
			flex-direction: row;
			align-items: center;
			justify-content: flex-start;
			flex-wrap: nowrap;
			overflow: hidden;
			& svg {
				color: rgb(255, 255, 255);
				width: 39px;
			}
			& input {
				width: 90%;
				height: 45px;
				background: unset;
				border: none;
				padding-left: 20px;
				color: white;
				font-size: 13px;
			}
		}
		& .x-text {
			margin: 15px auto;
			cursor: pointer;
			& a {
				font-size: 13px;
				letter-spacing: 1px;
				margin: 0 7px;
				&:hover {
					color: #959595;
				}
			}
		}
	}
	.home-view {
		position: relative;

		& .lower-4th-x {
			text-align: right;
			button {
				position: unset;
				height: 51px;
				background: unset;
				margin: 41px 0 22px 0;
				letter-spacing: 2px;
				& svg {
					width: 17px;
				}
				&:hover {
					border-color: white;
				}
			}
			& img {
				width: 63%;
				border-radius: 14px;
				margin-top: -115px;
				border: 2px solid #9a9a9a;
			}
		}
		& .lower-third-x {
			margin: 16px 10px;
			& h4 {
				font-size: 26px;
				letter-spacing: 3px;
				color: #ff006f;
			}
			& h2 {
				font-size: 38px;
				max-width: 450px;
				letter-spacing: 3px;
				margin: 10px 0;
				line-height: 1;
				& svg {
					width: 49px;
					color: #ff006f;
					font-weight: bold;
				}
			}
			& p {
				width: 490px;
				margin: 16px 0;
				font-size: 18px;
				color: #909090;
				line-height: 1.5;
			}
		}
		& .home-button-view {
			flex-wrap: wrap;
			& a {
				padding: 38px 87px;
				width: 182px;
				background: #181818;
				margin: 11px 12px;
				display: block;
				text-align: center;
				border-radius: 8px;
				&:nth-child(1) {
					background: #e91e63;
				}
				&:nth-child(2) {
					background: #03a9f4;
				}
				&:nth-child(3) {
					background: #ff3d00;
				}
				&:nth-child(4) {
					background: #4caf78;
				}
				&:nth-child(5) {
					background: #607d8b;
				}
				&:nth-child(6) {
					background: #0056ff;
				}
			}
		}
		& .home-circle {
			display: flex;
			flex-wrap: wrap;
			justify-content: space-evenly;
			& section {
				width: 208px;
				border-radius: 50%;
				height: 208px;
				text-align: center;
				padding: 34px;
				margin: 10px;
				cursor: pointer;
				transition: 300ms ease-in;
				&:hover {
					background: rgba(255, 255, 255, 0.0901960784);
				}
				& h5 {
					margin-top: 10px;
					letter-spacing: 2px;
					font-size: 16px;
					font-weight: 500;
				}
				& p {
					margin-top: 10px;
					color: #b1b1b1;
				}
				& img {
					width: 83px;
				}
			}
		}
		& .home-header-2 {
			text-align: center;
			width: 81%;
			margin: auto;
			font-size: 30px;
			letter-spacing: 2px;
			text-transform: uppercase;
		}
		& .view-text {
			margin: 30px 0;
			line-height: 1.4;
			color: #9f9f9f;
			font-size: 18px;
		}
		& .left {
			padding-top: 79px;
			position: relative;
			width: 22%;
			& .home-left-xxz {
				width: 254px;
				border-right: 1px solid rgba(255, 255, 255, 0.0784313725);
				height: 100vh;
				position: fixed;
				transition: 300ms ease-in-out;
				margin-top: 63px;
			}
			& svg {
				width: 40px;
				color: #ffffff4d;
			}
			& ul {
				& li {
					&:nth-child(1) {
						margin-bottom: 37px;
						margin-top: 43px;
					}
					font-size: 18px;
					margin-top: 9px;
				}
				& a {
					color: #7f7f7f;
					font-weight: 500;
					&:hover {
						color: white;
					}
				}
			}
		}
		& .right {
			margin-top: 160px;
			width: 69%;
			margin-left: 77px;
			& .right-top {
				font-size: 34px;
				margin: 17px 0;
			}
			& .video-content {
				position: relative;
				& video {
					width: 100%;
					border-radius: 20px;
				}
			}
		}
	}
	.button-view-x {
		position: absolute;
		left: 0;
		right: 0;
		bottom: 51px;
		height: 46px;
		display: flex;
		margin: auto;
		align-items: center;
		justify-content: center;
		width: 218px;
		border: 2px solid #656565;
		background: rgb(0 0 0 / 72%);
		color: white;
		border-radius: 5px;
		font-weight: 600;
		letter-spacing: 1px;
		font-size: 12px;
		font-family: consolas;
		&:hover {
			background: black;
		}
		& svg {
			height: 80%;
			margin-left: 10px;
		}
	}
</style>
