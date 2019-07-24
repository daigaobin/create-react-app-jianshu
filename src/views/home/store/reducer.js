import * as constants from './constants';
import { fromJS } from 'immutable';

const defaultState = fromJS({
	topicList: [],
	contentList: [{
		id: 1,
		title: '财神爷',
		desc: '测试上撒大所多撒多撒大多撒多多撒多多所大所多所多撒多sad撒大所多是sadsad洒水 ',
		imgUrl: '//upload-images.jianshu.io/upload_images/4770884-7291121d1ad9484f.png?imageMogr2/auto-orient/strip|imageView2/1/w/360/h/240'
	}],
});

const changeHomeData = (state, action) => {
	return state.merge({
		topicList: fromJS(action.topicList),
		articleList: fromJS(action.articleList),
		recommendList: fromJS(action.recommendList)
	});
};

export default (state = defaultState, action) => {
	switch(action.type) {
		case constants.CHANGE_HOME_DATA:
			return changeHomeData(state, action);
		default:
			return state;
	}
}