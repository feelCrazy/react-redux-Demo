/**
 * Created by ming on 2016/10/20
 */
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import *as actions from '../actions/action'
import AddItem from '../components/AddItem';
import ListItem from '../components/ListItem';

class List extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const {actions, text} = this.props;
        return (
            <div >
                <div className="Div1">
                    <ul>
                        {
                            text.map((text, index)=><ListItem key={index} index={index} item={text} actions={actions}/>)
                        }
                    </ul>
                </div>
                <div className="Div2">
                    <AddItem actions={actions}/>
                </div>

            </div>
        );
    }
}

List.propTypes = {
    actions: React.PropTypes.object.isRequired,
    text: React.PropTypes.array.isRequired,

};
List.defaultProps = {};

function mapStateToProps(state) { // 返回指定的 state
    return {
        text: state.reduce,
    }
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(actions, dispatch), // bindActionCreators({},dispatch) 指定actionCreate;或全部action
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(List); //注入 dispatch,state
