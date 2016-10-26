/**
 * Created by ming on 2016/10/22
 */

import React, {Component} from 'react';

class ListItem extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    handleDelete = ()=> {
        this.props.actions.deleteItem(this.props.index)
    };

    render() {
        return (
            <li style={{padding: 5}}>
                {this.props.item}
                <button style={{marginLeft: 20}} onClick={this.handleDelete}>删除</button>
            </li>
        );
    }
}

ListItem.propTypes = {
    item: React.PropTypes.string.isRequired,
    actions: React.PropTypes.object.isRequired,
    index: React.PropTypes.number.isRequired,

};
ListItem.defaultProps = {};
export default ListItem;
