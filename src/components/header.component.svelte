<script lang="ts">
	import logo from '$img/logo.png';
	import home from '$img/home.png';
	import { onMount } from 'svelte';

	let isScrolled = false;

	onMount(() => {
		window.addEventListener('scroll', handleScroll);
		return () => {
			window.removeEventListener('scroll', handleScroll);
		};
	});

	function handleScroll() {
		const scrollPos = window.scrollY;
		if (scrollPos > 100 && !isScrolled) {
			isScrolled = true;
			document.querySelector('header')?.classList.add('scrolled');
			document.querySelector('.left .home-left-xxz')?.classList.add('scrolled');
		} else if (scrollPos <= 100 && isScrolled) {
			isScrolled = false;
			document.querySelector('header')?.classList.remove('scrolled');
			document.querySelector('.left .home-left-xxz')?.classList.remove('scrolled');
		}
	}
</script>

<header>
	<nav class="page-size flex-center just-btwn">
		<ul>
			<li>
				<a href="/">
					<img class="logo" src={logo} alt="hazara university" />
				</a>
			</li>
		</ul>
		<ul class="flex-center">
			<li>
				<a class="home-icon" href="/" title="academics">
					<img class="invert" src={home} alt="home icon" />
				</a>
			</li>
			<li>
				<a href="/" title="academics"> Academics </a>
			</li>
			<li>
				<a href="/" title="internet access"> Internet Access </a>
			</li>
			<li>
				<a href="/" title="Research & Projects"> Research & Projects </a>
			</li>
			<li>
				<a href="/" title="Fee Challan"> Fee Challan </a>
			</li>
		</ul>
	</nav>
</header>

<style lang="scss">
	header {
		position: fixed;
		z-index: 100;
		left: 0;
		right: 0;
		background: #0000009e;
		backdrop-filter: blur(30px);
		color: white;
		padding: 9px 3px;
		height: 115px;
		transition: 300ms ease-in-out;
		border-bottom: 1px solid transparent;
		& .logo{
			width: 167px;
    		margin-top: 18px;
		}
		& nav {
			height: 100%;
			font-weight: 500;
			& ul:nth-child(2) {
				& li {
					margin: 0 10px;
				}
				& a {
					font-size: 16px;
					font-weight: 600;
					padding: 7px 10px;
					border-radius: 6px;
					&:hover,
					&.active {
						background: #202020;
					}
				}
			}
			& .home-icon {
				background-color: none;
				border: 1px solid #ffffff3f;
				display: flex;
				& img {
					width: 25px;
				}
			}
		}
	}

</style>
