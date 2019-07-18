import styled from 'styled-components';
import logoPic from '../../statics/logo.png';
import vipPic from '../../statics/nav_jsds_beta-eeb44d165b8ba37680fdb7e65ae17ae4.png';

export const HeaderWrapper = styled.div`
    height:56px;
    border-bottom: 1px solid #f0f0f0;
    margin-bottom: 10px;
`;

export const Nav = styled.nav`
    min-width: 768px;
    max-width: 1440px;
    margin: 0 auto;
`;

export const Logo = styled.div`
	width: 100px;
	height: 56px;
	background: url(${logoPic});
	background-size: contain;
`;

export const NavItem = styled.div`
	line-height: 56px;
	padding: 0 15px;
	font-size: 17px;
    color: #333;
    cursor: pointer;
	&.left {
		float: left;
	}
	&.right {
		float: right;
		color: #969696;
	}
	&.active {
		color: #ea6f5a;
	}
`;

export const SearchWrapper = styled.div`
	position: relative;
	float: left;
	.zoom {
		position: absolute;
		right: 5px;
		bottom: 5px;
		width: 30px;
		line-height: 30px;
		border-radius: 15px;
		text-align: center;
		&.focused {
			background: #777;
			color: #fff;
		}
	}
`;

export const NavSearch = styled.input.attrs({
	placeholder: '搜索'
})`
	width: 240px;
	height: 38px;
	padding: 0 30px 0 20px;
	margin-top: 9px;
	margin-left: 20px;
	box-sizing: border-box;
	border: none;
	outline: none;
	border-radius: 19px;
	background: #eee;
	font-size: 14px;
	color: #666;
	&::placeholder {
		color: #999;
	}
	&.focused {
		width: 320px;
	}
	&.slide-enter {
		transition: all .2s ease-out;
	}
	&.slide-enter-active {
		width: 320px;
	}
	&.slide-exit {
		transition: all .2s ease-out;
	}
	&.slide-exit-active {
		width: 240px;
	}
`;

export const Button = styled.div`
	float: right;
	margin-top: 9px;
	margin-right: 20px;
	padding: 0 20px;
	line-height: 38px;
	border-radius: 19px;
	border: 1px solid #ec6149;
	font-size: 14px;
	&.reg {
		color: #ec6149;
	}
	&.writting {
		color: #fff;
		background: #ec6149;
	}
`

export const Vip = styled.div`
	width: 56px;
    height: 25px;
    margin-top: 15px;
	background: url(${vipPic}) no-repeat;
    background-size: contain;
`;

