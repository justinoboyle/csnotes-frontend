import React, { Component } from "react"
import "./HomePage.css"
import SearchTable from "./SearchTable"
import Jumbotron from "../../components/Jumbotron"
import { Link } from "react-router-dom"

export default class HomePage extends Component {
  state = {
    maxItems: 10,
    query: "",
  }
  render() {
    return (
      <main>
        <section>
          <Jumbotron extraClass={"jumbotron-home"}>
            <h2>Computer science, simplified.</h2>
            <h3>
              Go on, create that killer app. Or
              <Link to="/post">write a post</Link>.
            </h3>
          </Jumbotron>

          <div className="search-box-container search-page">
            <input
              onChange={event => {
                this.setState({ query: event.target.value || "" })
                this.props.postMetaStore
                  .checkForNew({ search: event.target.value }, () => this.setState({}))
                  .then()
                  .catch((e) => console.log('onSetStateChange'))
              }}
              placeholder="I want to learn about..."
            />
          </div>
          <SearchTable
            items={this.props.postMetaStore.items}
            maxItems={this.state.maxItems}
            query={this.state.query}
          />
        </section>
      </main>
    )
  }
}
