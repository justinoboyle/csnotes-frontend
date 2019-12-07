import React, { Component } from "react"
import { Link } from "react-router-dom"

export default class SearchTable extends Component {
  static defaultProps = {
    items: [],
    query: "",
    maxItems: 10,
  }

  get results() {
    
    let keywords = []
    if (this.props.query) {
      keywords = this.props.query.toLowerCase().split(" ")
    }
    let scores = this.props.items.map(a => ({
      ...a,
      score: getScore([a.title, ...a.tags].join(" "), keywords),
    }))
    scores = scores.sort((a, b) => (a.score > b.score ? -1 : 1))
    return scores.slice(0, this.props.maxItems)
  }
  render() {
    return (
      <table className="search-results">
        <tbody>
          <tr>
            <th className="full-col">Name</th>
        
            <th>Date</th>
          </tr>
          {this.results.map(result => {
            return (
              <tr key={`${result.poster}/${result.name}`}>
                <td className="full-col">
                  <Link to={`/article/${result.poster}/${result.name}`}>{result.title}</Link>
                </td>
                
                <td>{new Date(result.date || 0).toLocaleDateString("en-GB", {day: 'numeric', month: 'short'})}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    )
  }
}

function getScore(name, keyWords) {
  let score = 0
  for (let word of keyWords) if (name.toLowerCase().includes(word.toLowerCase())) score++
  return score
}
