import { createGlobalStyle, css } from "styled-components";
import { normalize } from "polished";

const StyledGlobalStyle = createGlobalStyle`
	${borderBox}
	${normilizeStyle}
	body{
		transition: background 0.2s ease;
		background: ${({ theme }) => theme.color.lightBlue};
		font-family: ${({ theme }) => theme.font.family.manrope};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		font-size: ${({ theme }) => theme.font.size.xs};
		color: ${({ theme }) => theme.color.black};
		#root{
			display:flex; 
			flex-direction:column;
			min-height: 100vh;
		}
	}
	a{
		h1,h2,h3,h4,h4,h5,p{
			text-decoration: underline;
		}
	}
	ul{
		line-height: 1.8rem;
	}
	a{
		color: ${({ theme }) => theme.color.black};
	}
	h1{
		margin: 0 0 2.5rem 0;
		font-size: '3rem';
    line-height: '2.73rem';
		scroll-margin-top: 5rem;
	}
	h2{
		margin: 0 0 2rem 0;
		font-weight: ${({ theme }) => theme.font.weight.regular};
		font-size: ${({ theme }) => theme.font.size.xlg};
		font-family: ${({ theme }) => theme.font.family.manrope};
		scroll-margin-top: 5rem;
	}
	h3{
		margin: 0 0 1.5rem 0;
		font-family: ${({ theme }) => theme.font.family.manrope};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		font-size: ${({ theme }) => theme.font.size.lg};
		scroll-margin-top: 5rem;

	}
	h4{
		margin: 0 0 1rem 0;
		font-family: ${({ theme }) => theme.font.family.manrope};
		font-weight: ${({ theme }) => theme.font.weight.semibold};
		font-size: ${({ theme }) => theme.font.size.md};
	}
	h5{
		margin: 0 0 1rem 0;
		font-family: ${({ theme }) => theme.font.family.manrope};
		font-weight: ${({ theme }) => theme.font.weight.semibold};
		font-size: ${({ theme }) => theme.font.size.sm};
	}
	p{
		font-size: ${({ theme }) => theme.font.size.xs};
		font-family: ${({ theme }) => theme.font.family.manrope};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		max-width: 42em;
		margin: 0 0 2rem 0;
		outline: transparent;
		line-height: 1.8rem;
	}
	p.isCaption{
		font-size: ${({ theme }) => theme.font.size.xxs};
		border-top: 1px solid;
		border-color: ${({ theme }) => theme.color.black};
		padding-top: 1.5rem;
	}
	p.xxs{
		font-size: ${({ theme }) => theme.font.size.xxs};
	}
	p.xs{
		font-size: ${({ theme }) => theme.font.size.xs};
	}
	p.md{
		font-size: ${({ theme }) => theme.font.size.md};
		line-height: 2.25rem;
	}
	p.lg{
		font-size: ${({ theme }) => theme.font.size.lg};
		line-height: 2.5rem;
	}
	p.xlg{
		font-size: ${({ theme }) => theme.font.size.xlg};
	}
	p.xxlg{
		font-size: ${({ theme }) => theme.font.size.xxlg};
	}
	ul{
		max-width: 42em;
	}
	.article-image {
		margin: 0 0 2rem 0;
		img{
			border: 1px solid #c7c7c7;
			border-radius: 16px;
		}
	}
	.article-media{
		margin: 0 0 2rem 0;
		display: block;
		width: 100%;
		border: 1px solid #c7c7c7;
		border-radius: 16px;
	}

	[data-rmiz-overlay]{
		background-color:${({ theme }) => theme.color.lightBlue}f5 !important;
		background-opacity:.8 !important;
	}
	@keyframes react-loading-skeleton {
    100% {
        transform: translateX(100%);
    }
	}
	.react-loading-skeleton {
			--base-color: ${({ theme }) => theme.color.black};
			--highlight-color: ${({ theme }) => theme.color.lightBlue};
			--animation-duration: 1s;
			--animation-direction: normal;
			--pseudo-element-display: block; /* Enable animation */

			background-color: var(--highlight-color);
			opacity:20%;
			width: 100%;
			border-radius: 100px;
			display: inline-flex;
			line-height: 1;

			position: relative;
			overflow: hidden;
			z-index: 1; /* Necessary for overflow: hidden to work correctly in Safari */
	}

	.react-loading-skeleton::after {
			content: ' ';
			display: var(--pseudo-element-display);
			position: absolute;
			top: 0;
			left: 0;
			right: 0;
			height: 100%;
			background-repeat: no-repeat;
			background-image: linear-gradient(
					90deg,
					var(--highlight-color) 0%,
					var(--base-color) 20%,
					var(--base-color) 80%,
					var(--highlight-color) 100%
			);
			transform: translateX(-100%);

			animation-name: react-loading-skeleton;
			animation-direction: var(--animation-direction);
			animation-duration: var(--animation-duration);
			animation-timing-function: ease-in-out;
			animation-iteration-count: infinite;
	}
	/* Slider */
	.slick-slider
	{
			position: relative;
			margin-bottom: 2rem;
			display: block;
			box-sizing: border-box;

			-webkit-user-select: none;
				-moz-user-select: none;
					-ms-user-select: none;
							user-select: none;

			-webkit-touch-callout: none;
			-khtml-user-select: none;
			-ms-touch-action: pan-y;
					touch-action: pan-y;
			-webkit-tap-highlight-color: transparent;
	}
	.slick-list
	{
			position: relative;
			cursor: grab;
			display: block;
			overflow: hidden;
			margin: 0;
			padding: 0;
	}
	.slick-list:focus
	{
			outline: none;
	}
	.slick-list.dragging
	{
			cursor: pointer;
			cursor: hand;
	}

	.slick-slider .slick-track,
	.slick-slider .slick-list
	{
			-webkit-transform: translate3d(0, 0, 0);
				-moz-transform: translate3d(0, 0, 0);
					-ms-transform: translate3d(0, 0, 0);
					-o-transform: translate3d(0, 0, 0);
							transform: translate3d(0, 0, 0);
	}

	.slick-track
	{
			position: relative;
			top: 0;
			left: 0;

			display: block;
			margin-left: auto;
			margin-right: auto;
	}
	.slick-track:before,
	.slick-track:after
	{
			display: table;

			content: '';
	}
	.slick-track:after
	{
			clear: both;
	}
	.slick-loading .slick-track
	{
			visibility: hidden;
	}

	.slick-slide
	{
			display: none;
			float: left;

			height: 100%;
			min-height: 1px;
	}
	[dir='rtl'] .slick-slide
	{
			float: right;
	}
	.slick-slide img
	{
			display: block;
			border: 1px solid #c7c7c7;
    	border-radius: 16px;
	}
	.slick-slide.slick-loading img
	{
			display: none;
	}
	.slick-slide.dragging img
	{
			pointer-events: none;
	}
	.slick-initialized .slick-slide
	{
			display: block;
	}
	.slick-loading .slick-slide
	{
			visibility: hidden;
	}
	.slick-vertical .slick-slide
	{
			display: block;

			height: auto;

			border: 1px solid transparent;
	}
	.slick-arrow.slick-hidden {
			display: none;
	}
	.slick-dots{
		padding: 0;
    display: flex!important;
    gap: 1rem;
    margin-left: auto;
    margin-right: auto;
    justify-content: center;
		li{
			list-style-type:none;
			&.slick-active div{
				width: 32px;
				border-radius: 15px;
				opacity: 1;
				transition: opacity 500ms ease-in-out, width 250ms ease-in-out;
			}
		}
	}
`;

function borderBox(){
	return(
		css`
			*,
			*:before,
			*:after{
				box-sizing: border-box;
			}
		`
	);
}

function normilizeStyle(){
	return normalize();
}

export default StyledGlobalStyle;