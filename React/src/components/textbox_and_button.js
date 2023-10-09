import React from "react";
import { GrDeploy } from 'react-icons/gr';

class Textbox_and_button extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: ''
    };
  }

  onChangeText(e) {
    this.setState({ product: e.target.value });
  }


  handleSubmit = () => {
    // リポジトリのクローンを実行
    this.setState({ product: '' });
  }

  render() {
    return (
      <>
        <input className='input_GitHuburl' type="text" value={this.state.product} placeholder="Input GitHub repo's URL" onChange={e => this.onChangeText(e)} />
        <button className="button" onClick={this.handleSubmit}>
          <GrDeploy className="icon" />
        </button>
      </>
    );
  }
}

export default Textbox_and_button;
