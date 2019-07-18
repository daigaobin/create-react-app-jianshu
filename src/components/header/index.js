import React, { Component } from 'react';
import { CSSTransition } from 'react-transition-group';

import {
    HeaderWrapper,
    Nav,
    Logo,
    Vip,
    NavItem,
    SearchWrapper,
    NavSearch,
    Button
} from './style';

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    }

    render() {
        return (
            <HeaderWrapper>
                <Nav>
                    <NavItem className='left'><Logo></Logo></NavItem>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={this.state.focused} timeout={200} classNames="slide">
                            <NavSearch className={this.state.focused
                                ? 'focused'
                                : ''}
                                onFocus={() => this.handleInputFocus()}
                                onBlur={() => this.handleInputBlur()}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={this.state.focused
                            ? 'focused iconfont zoom'
                            : 'iconfont zoom'}>
                            &#xe614;
                        </i>
                    </SearchWrapper>
                    <NavItem className='right'>
                        <Button className='writting'>
                            <i className="iconfont">&#xe615;</i>
                            写文章
                        </Button>
                    </NavItem>
                    <NavItem className='right'>
                        <Button className='reg'>注册</Button>
                    </NavItem>
                    <NavItem className='right'>登陆</NavItem>
                    <NavItem className='right'>
                        <Vip></Vip>
                    </NavItem>
                    <NavItem className='right'>Aa</NavItem>
                </Nav>
            </HeaderWrapper>
        )
    }

    handleInputFocus() {
        this.setState({
            focused: true
        });
    }

    handleInputBlur() {
        this.setState({
            focused: false
        });
    }
}

export default Header;