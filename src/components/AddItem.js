/**
 * Created by ming on 2016/10/20
 */
import React, {Component,} from 'react';

class AddItem extends Component {
   
    handleAdd = ()=> {
       const text = this.input;
        if (text.value.trim() === '')
            return;
        this.props.actions.addItem(text.value.trim());
        text.value = ''
    };
               
    handleKeyAdd = (e)=>{
       if(e.key === 'Enter') {
          const text = this.input;
          if(text.value.trim() === '')
            return;
          this.props.actions.addItem(text.value.trim());
          text.value = '';
       }
    };           

    render() {
        return (
            <div>
                <input type="text" ref={input=>this.input=input} onKeyPress={this.handleKeyAdd}/>
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
