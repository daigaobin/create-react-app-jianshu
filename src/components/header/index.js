import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { CSSTransition } from 'react-transition-group';
import { actionCreators } from './store';

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
    /* constructor(props) {
        super(props);
        this.state = {
            focused: false
        };

        this.handleInputFocus = this.handleInputFocus.bind(this);
        this.handleInputBlur = this.handleInputBlur.bind(this);
    } */

    render() {
        const {
            focused,
            handleInputFocus,
            handleInputBlur,
            list,
            login,
            logout
        } = this.props;

        return (
            <HeaderWrapper>
                <Nav>
                    <NavItem className='left'>
                        <Link to="/"><Logo></Logo></Link>
                    </NavItem>
                    <NavItem className='left active'>首页</NavItem>
                    <NavItem className='left'>下载App</NavItem>
                    <SearchWrapper>
                        <CSSTransition in={focused} timeout={200} classNames="slide">
                            <NavSearch className={focused
                                ? 'focused'
                                : ''}
                                onFocus={() => handleInputFocus()}
                                onBlur={() => handleInputBlur()}>
                            </NavSearch>
                        </CSSTransition>
                        <i className={focused
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

    /* handleInputFocus() {
        this.setState({
            focused: true
        });
    }

    handleInputBlur() {
        this.setState({
            focused: false
        });
    } */
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'focused']),
    }
}

const mapDispathToProps = (dispatch) => {
    return {
        handleInputFocus() {
            dispatch(actionCreators.searchFocus());
        },
        handleInputBlur() {
            dispatch(actionCreators.searchBlur());
        },
    }
}

export default connect(mapStateToProps, mapDispathToProps)(Header);