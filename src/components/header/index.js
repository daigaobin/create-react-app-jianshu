import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {CSSTransition} from 'react-transition-group';
import {actionCreators} from './store';

import {
  HeaderWrapper,
  Nav,
  Logo,
  Vip,
  NavItem,
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem,
  NavSearch,
  Button,
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

  getSearchList () {
    const {
      focused,
      list,
      page,
      pageSize,
      totalPage,
      mouseIn,
      handleMouseEnter,
      handleMouseLeave,
      handleChangePage,
    } = this.props;

    const newList = list.toJS ();
    const pageList = [];
    if (newList.length) {
      for (let i = (page - 1) * pageSize, len = page * pageSize; i < len; i++) {
        pageList.push (
          <SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>
        );
      }
    }

    if (focused || mouseIn) {
      return (
        <SearchInfo
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <SearchInfoTitle>
            热门搜索
            <SearchInfoSwitch
              onClick={() => handleChangePage (page, totalPage, this.spinIcon)}
            >
							<i
								ref={(icon) => {
									this.spinIcon = icon
								}}
                className="iconfont spin">&#xe851;</i>
              换一批
            </SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {
              pageList /* list.map (item => {
              return <SearchInfoItem key={item}>{item}</SearchInfoItem>;
            }) */
            }
          </SearchInfoList>
        </SearchInfo>
      );
    } else {
      return null;
    }
  }

  render () {
    const {focused, handleInputFocus, handleInputBlur, list} = this.props;

    return (
      <HeaderWrapper>
        <Nav>
          <NavItem className="left">
            <Link to="/"><Logo /></Link>
          </NavItem>
          <NavItem className="left active">首页</NavItem>
          <NavItem className="left">下载App</NavItem>
          <SearchWrapper>
            <CSSTransition in={focused} timeout={200} classNames="slide">
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus (list)}
                onBlur={() => handleInputBlur ()}
              />
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>
              &#xe614;
            </i>
            {this.getSearchList ()}
          </SearchWrapper>
          <NavItem className="right">
            <Button className="writting">
              <i className="iconfont">&#xe615;</i>
              写文章
            </Button>
          </NavItem>
          <NavItem className="right">
            <Button className="reg">注册</Button>
          </NavItem>
          <NavItem className="right">登陆</NavItem>
          <NavItem className="right">
            <Vip />
          </NavItem>
          <NavItem className="right">Aa</NavItem>
        </Nav>
      </HeaderWrapper>
    );
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

const mapStateToProps = state => {
  return {
    focused: state.getIn (['header', 'focused']),
    list: state.getIn (['header', 'list']),
    page: state.getIn (['header', 'page']),
    pageSize: state.getIn (['header', 'pageSize']),
    totalPage: state.getIn (['header', 'totalPage']),
    mouseIn: state.getIn (['header', 'mouseIn']),
  };
};

const mapDispathToProps = dispatch => {
  return {
    handleInputFocus (list) {
      list.size === 0 && dispatch (actionCreators.getList ());
      dispatch (actionCreators.searchFocus ());
    },

    handleInputBlur () {
      dispatch (actionCreators.searchBlur ());
    },

    handleMouseEnter () {
      dispatch (actionCreators.mouseEnter ());
    },

    handleMouseLeave () {
      dispatch (actionCreators.mouseLeave ());
    },

    handleChangePage (page, totalPage, spin) {
			let originAngle = spin
        .style
        .transform
        .replace(/[^0-9]/ig, '');
      if (originAngle) {
        originAngle = parseInt(originAngle, 10);
      } else {
        originAngle = 0;
      }
      spin.style.transform = 'rotate(' + (originAngle + 360) + 'deg)';

      if (page < totalPage) {
        dispatch (actionCreators.changePage (page + 1));
      } else {
        dispatch (actionCreators.changePage (1));
      }
    },
  };
};

export default connect (mapStateToProps, mapDispathToProps) (Header);
