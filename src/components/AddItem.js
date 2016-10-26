/**
 * Created by ming on 2016/10/20
 */
import React, {Component,} from 'react';

class AddItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input: '',
        };
    }

    handleAdd = ()=> {
        if (this.state.input === '') {
            return;
        }
        this.props.actions.addItem(this.state.input);
        this.setState({
            input: '',
        });
    };

    handleChange = (e) => {
        this.setState({
            input: e.target.value,
        });

    };

    render() {
        return (
            <div>
                <input type="text" value={this.state.input} onChange={this.handleChange}/>
                <button onClick={this.handleAdd}>添加</button>
            </div>
        );
    }
}

AddItem.propTypes = {
    actions: React.PropTypes.object.isRequired,
};
AddItem.defaultProps = {};
export default AddItem;
