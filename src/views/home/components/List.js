import React, {Component} from 'react';
import {connect} from 'react-redux';
import {ListItem, ListInfo} from '../style';
import {Link} from 'react-router-dom';
class List extends Component {
  render () {
    const {list} = this.props;

    return (
      <div>
        {list.map (item => (
          <ListItem>
            <img alt="" className="pic" src={item.get ('imgUrl')} />
            <ListInfo>
              <Link to="/detail/1">
                <h3 className="title">{item.get ('title')}</h3>
              </Link>
              <p className="desc">{item.get ('desc')}</p>
            </ListInfo>
          </ListItem>
        ))}
      </div>
    );
  }
}

const mapState = state => ({
  list: state.getIn (['home', 'contentList']),
});

export default connect (mapState, null) (List);
