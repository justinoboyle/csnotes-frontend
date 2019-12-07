import React, { Component } from "react"
import "./ArticlePage.css"
import CommentSection from "./CommentSection"
import Toast from "./Toast"
import Tag from "./Tag"
import ReactMarkdown from 'react-markdown'


export default class ArticlePage extends Component {
  state = {
    loaded: false,
    found: false,
    content: "Content",
    title: "Title",
    tags: ["tag"],
    date: 0,
    poster: "poster",
    name: "name",
  }
  componentDidMount() {
    this.props.postContentStore
      .checkForNew(
        ({
          poster: this.props.match.params.username,
          name: this.props.match.params.name,
        }),
        () => this.checkPostContentStore()
      )
      .then()
      .catch((e) => console.log('componentDidMount', e))
  }

  checkPostContentStore() {
    if (
      this.props.postContentStore.userposts &&
      this.props.postContentStore.userposts[this.props.match.params.username] &&
      this.props.postContentStore.userposts[this.props.match.params.username][
        this.props.match.params.name
      ]
    ) {
      const obj = this.props.postContentStore.userposts[this.props.match.params.username][
        this.props.match.params.name
      ]
      // console.log(obj)
      if (!obj.found) 
        return this.setState({
          found: false,
        })
      // console.log("Loaded!")
      return this.setState({
        loaded: true,
        ...obj,
      })
    } else {
      // console.log(":(", this.props.postContentStore)
      return this.setState({
        loaded: false,
      })
    }
  }

  render() {
    if (!this.state.loaded) {
      return (
        <main>
          <span>Loading...</span>
        </main>
      )
    }
    if (!this.state.found) {
      return (
        <main>
          <span>404 Not Found</span>
        </main>
      )
    }
    return (
      <>
        <h1>{this.state.title}</h1>
        <div className="author">By @{this.state.poster}</div>
        <div className="tags">
          <Tag name="javascript" />
          <Tag name="debugging" />
        </div>
        {/* <Toast>
          ‼️ This page is simply HTML/CSS (a frontend template), and is not yet
          activated with live information; it is a sample.
        </Toast> */}
        <main>
          <section>
            <div className="content-section">
            <ReactMarkdown source={this.state.content} />
            </div>
          </section>
          <section>
            <h2>Comments</h2>
            {/* <CommentSection /> */}
            <p>Comments are currently not enabled for this post.</p>
          </section>
        </main>
      </>
    )
  }
}
