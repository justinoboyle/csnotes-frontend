import React, { Component } from "react"
import Link from "react-router-dom"
import CommentThread from './CommentThread'
import './CommentSection.css'

export default class CommentSection extends Component {
  render() {
    return (
      <>
        <CommentThread>
          <div className="comment">
            <span className="comment-upvote-downvote">
              <button>⇡</button>
              <button>⇣</button>
            </span>
            <span className="comment-content-area">
              <small>@justinoboyle / 3 min ago</small>
              <span>Posted this article at 3:34.</span>
              <small className="comment-actions">
                <button>Reply</button>
                {/* <button>Report</button> */}
              </small>
            </span>
          </div>
        </CommentThread>
      </>
    )
  }
}
