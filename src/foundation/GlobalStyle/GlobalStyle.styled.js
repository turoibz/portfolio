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
	}
	h2{
		margin: 0 0 2rem 0;
		font-weight: ${({ theme }) => theme.font.weight.regular};
		font-size: ${({ theme }) => theme.font.size.xlg};
		font-family: ${({ theme }) => theme.font.family.manrope};
	}
	h3{
		margin: 0 0 1.5rem 0;
		font-family: ${({ theme }) => theme.font.family.manrope};
		font-weight: ${({ theme }) => theme.font.weight.regular};
		font-size: ${({ theme }) => theme.font.size.lg};
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
		max-width: 40em;
		margin: 0 0 2rem 0;
		outline: transparent;
		line-height: 1.8rem;
		&:last-child{
			margin: 0;
		}
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
	}
	p.lg{
		font-size: ${({ theme }) => theme.font.size.lg};
	}
	p.xlg{
		font-size: ${({ theme }) => theme.font.size.xlg};
	}
	p.xxlg{
		font-size: ${({ theme }) => theme.font.size.xxlg};
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