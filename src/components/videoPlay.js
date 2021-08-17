import React from 'react'
import ReactPlayer from "react-player";

export const validateInput = (str = "") => str.includes(".");

class videoPlay extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      input: "",
      url: "",
      number: null,
      errorNumber: "",
    }
  }

  onInput = (event) => {
    this.setState({ input: event.target.value })
  }

  submitForm = (event) => {
    event.preventDefault();
    this.setState({ url: this.state.input })
  }
  onNumber = (event) => {
    this.setState({ number: parseInt(event.target.value) })
  }


  render() {

    var a = [];

    for (var i = 0; i < this.state.number; i++) {
      a.push(i)
      console.log(i)
    }
    return (
      <div className="App">
        <header className="App-header">
          <div>
            <form onSubmit={this.submitForm}>
              <label style={{ color: "black", fontWeight: "normal" }} className="label ">Please Enter a web URL</label>
              <input onChange={this.onInput} className="form-control p-4" type="text" placeholder="Input the video url" name="url" />
              <br />
              <label style={{ color: "black", fontWeight: "normal" }} className="label ">Please Enter a number</label>
              <input className="form-control p-4" type="text" placeholder="Enter a number" name="number" onChange={this.onNumber} />

              <button style={{ margin: "20px" }} className="btn btn-primary">Enter</button>
            </form>

          </div>
          <div className="videos gap">
            {
              a.map((item) => {
                return <ReactPlayer url={this.state.url} controls={true} />
              })
            }

          </div>

        </header>
      </div>
    )
  }

}
;


export default videoPlay;
