import React, { Component } from "react"
import { Link } from "react-router-dom"
import Jumbotron from "../../components/Jumbotron"
import "./PostPage.css"
import ReactMarkdown from "react-markdown"

export default class PostPage extends Component {
  state = {
    value: "# Write some markdown here",
    title: "Title...",
    name: localStorage.nameWIP || "Name..."
  }
  handleChange(event) {
    //   console.log(event.target.value || '')
    this.setState({ value: event.target.value || "" })
    localStorage.articleWIP = event.target.value || ""
  }

  handleChangeTitle(event) {
    this.setState({ title: event.target.value || "" })
    localStorage.titleWIP = event.target.value || ""
  }

  handleChangeName(event) {
    this.setState({ name: event.target.value || "" })
    localStorage.nameWIP = event.target.value || ""
  }

  send() {
    // Usually, this would send a POST request, but
    // we are just using local storage here.
    const obj = {
      title: this.state.title,
      content: this.state.value,
      date: Date.now(),
      found: true,
      tags: [],
      poster: this.state.name,
      name: '' + Math.random() 
    }
    if(!window.userposts[obj.poster])
    window.userposts[obj.poster] = {}
    window.userposts[obj.poster][obj.name] = obj
    window.items.push(obj)
    window.saveItems()
    this.setState({})
    if(this.props.onChange)
    setTimeout(() => {
      this.props.onChange(obj)
    }, 100)
  }

  render() {
    return (
      <main>
        <section>
          <Jumbotron extraClass={"jumbotron-post"}>
            <h2>Time to write...</h2>
            <h3>
              Need some inspiration? Check out{" "}
              <Link to="/">some other posts.</Link>
            </h3>
          </Jumbotron>

          <input
            placeholder="Title..."
            onChange={this.handleChangeTitle.bind(this)}
          />
          <input
            placeholder="Your name..."
            onChange={this.handleChangeName.bind(this)}
          />
          <div className="editor-area">
            <div className="editor-section">
              <h2>Editor</h2>
              <textarea
                onChange={this.handleChange.bind(this)}
                className="new-post-textarea"
              >
                # Write some markdown here
              </textarea>
            </div>
            <div className="editor-section">
              <h2>Preview</h2>
              <ReactMarkdown source={this.state.value} />
            </div>
          </div>
          <p className="tos">
            By submitting a post, you abide by the Terms of Service
          </p>
          <button onClick={() => this.send()} className="submit-new-post">
            Submit
          </button>
        </section>
      </main>
    )
  }
}
