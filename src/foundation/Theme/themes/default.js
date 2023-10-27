import { rem } from "polished";

const Default =  {
	id:"default",
	color: {
		black: "#272721",
		lightBlue: "#F2F8F8",
		offwhite: "#fcfdfc",
		offgrey: "#fafbfb",
		peach: "#fdc9be",
		slateGray: "#70798c",
		gray: "#d3d3d3",
		sand: "#ffeee4",
		skyblue: "#24C4F5",
	},
	font:{
		family:{
			manrope: "Manrope, sans-serif"
		},
		weight:{
			regular: 400,
			semibold: 700
		},
		size:{
			xxs: rem('14px'),
			xs: rem('17px'),
			sm: rem('18px'),
			md: rem('20px'),
			lg: rem('24px'),
			xlg: rem('32px'),
			xxlg: rem('40px'),
		},
		lineheight:{
			xxs: rem('21px'),
			xs: rem('25px'),
			sm: rem('27px'),
			md: rem('30px'),
			lg: rem('36px'),
			xlg: rem('48px'),
			xxlg: rem('60px'),
		}
	},
	grid:{
		row:{
			padding: 0
		},
		col:{
			padding: 20
		},
		container: {
			padding: 0,
			maxWidth: {
				xxl: 1301,
				xl: 1300,
				lg: 960,
				md: 720,
				sm: 540,
				xs: 540,
				}
		}
	},
	icon:{
		size: {
			tn: rem('20px'),
			sm: rem('24px'),
			md: rem('32px'),
			lg: rem('40px')
		}
	}
}

export default Default;