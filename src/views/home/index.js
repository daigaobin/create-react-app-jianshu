import React, {Component} from 'react';
import { connect } from 'react-redux';
import {HeaderWrapper, HeaderLeft, HeaderRight} from './style';
import {List, Writer, Recommend, Topic} from './components';
import { actionCreators } from './store';

class Home extends Component {
  render () {
    return (
      <HeaderWrapper>
        <HeaderLeft>
          <img
            className="banner-img"
            src="//upload.jianshu.io/admin_banners/web_images/4680/f3832b8ec185f3772a31960a2494964132f29ce0.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"
            alt="540"
          />
          <Topic />
          <List />
        </HeaderLeft>
        <HeaderRight>
          <Recommend />
          <Writer />
        </HeaderRight>
      </HeaderWrapper>
    );
  }

  componentDidMount() {
		this.props.changeHomeData();
	}
}

const mapState = (state) => ({
  showScroll: state.getIn(['home', 'showScroll']),
})

const mapDispatch = (dispatch) => ({
	changeHomeData() {
		dispatch(actionCreators.getHomeInfo());
  },
  
	changeScrollTopShow() {
		if (document.documentElement.scrollTop > 100) {
			dispatch(actionCreators.toggleTopShow(true))
		}else {
			dispatch(actionCreators.toggleTopShow(false))
		}
	}
});

export default connect(mapState, mapDispatch)(Home);
