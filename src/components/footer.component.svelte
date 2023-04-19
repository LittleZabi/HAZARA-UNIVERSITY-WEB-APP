<script lang="ts">
	import logo from '$img/logo.png';
	import sequalBlue from '$img/sequal-blue.png';
	import phoneIcon from '$img/phone.png';
	import feedback from '$img/feedback.png';
	import location from '$img/location-icon.png';
	import facebook from '$img/facebook.png';
	import twitter from '$img/twitter.png';
</script>

<footer>
	<div class="footer-tec2">
		<a href="/">
			<img class="footer-img-x" src={logo} alt="hazara university" />
		</a>
		<a href="/">
			<img class="footer-img-x" src={sequalBlue} alt="hazara university" />
		</a>
		<p class="p-c22">
			© {new Date().getFullYear()} Hazara University Mansehra. All rights reserved. Developed by LittleZabi
			at <a href="https://www.youtube.com/@blueterminal">Blueterminal Lab.</a>
		</p>
		<a href="/" class="fool1">
			<img src={location} alt="location icon" />
			<span>KKH Dhodiyal Mansehra, KPK Pakistan</span>
		</a>
		<a href="/" class="fool2">
			<img src={phoneIcon} alt="phone icon" />
			<span>0997-414143-47</span>
		</a>
		<a href="/" class="fool3">
			<img src={feedback} alt="feedback icon" />
			<span>FEEDBACK</span>
		</a>
	</div>
	<div class="a3c8-lower">
		<a href="/">Terms</a>
		<a href="/">Privacy Policy</a>
		<a href="/">
			<img src={facebook} alt="facebook icon" />
		</a>
		<a href="/">
			<img src={twitter} alt="twitter icon" />
		</a>
		<a href="/">
			<img class="a83caa0" src={location} alt="location icon" />
		</a>
	</div>
</footer>

<style type="scss">
	footer {
		padding-top: 110px;
		margin-top: 50px;
		border-top: 1px solid rgba(255, 255, 255, 0.0784313725);
		& .footer-tec2 {
			display: flex;
			align-items: flex-start;
			justify-content: center;
			flex-wrap: wrap;
			& a,
			& p {
				margin: 20px 5px;
				width: 32.33333%;
				display: inline-block;
				text-align: center;
				font-size: 13px;
				height: 71px;
				color: #ffffffb5;
				display: flex;
				align-content: center;
				flex-wrap: wrap;
				justify-content: center;
				align-items: center;
			}
			& .p-c22 {
				font-family: consolas;
				& a {
					display: inline;
					margin: 0;
					width: auto;
					color: white;
					font-style: italic;
					font-weight: bold;
					font-size: 14px;
					height: auto;
				}
			}
			& .footer-img-x {
				width: 150px;
			}
		}
        & a:hover{
            color: white;
        }
	}
	.fool1,
	.fool2,
	.fool3 {
		& img {
			width: 28px;
		}
		& span {
			margin: 0 8px;
		}
	}
	.fool1 {
		& img {
			width: 19px;
		}
	}
    .a3c8-lower{
        display: flex;
        align-items: center;
        justify-content: flex-end;
        flex-wrap: wrap;
        flex-direction: row;
        & a{
            margin: 0 20px;
            text-transform: uppercase;
            font-size: 13px;
            letter-spacing: 1px;
            font-family: consolas;
            color: #ffffffb5;
            & img{
                width: 40px;
                &.a83caa0{
                    margin-right: 50px;
                    width: 20px;
                }
            }
        }
        margin: 40px 0 40px 0;
    }
</style>
