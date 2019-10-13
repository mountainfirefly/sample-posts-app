import React, { Component } from 'react'
import { connect } from 'react-redux'

import PostsView from '../components/Posts'
import { setPosts, toggleLoading } from '../actions/PostActions'

class FetchPosts extends Component {
  componentDidMount() {
    const { toggleLoading, setPosts } = this.props
    
    toggleLoading(true)

    fetch('https://jsonplaceholder.typicode.com/posts')
    .then((res) => {
      if (res.status === 200) {
        return res.json()
      }
    })
    .then((result) => {
      setPosts(result)
      toggleLoading(false)
    })
    .catch(() => {
      toggleLoading(false)
    })
  }

  render() {
    return <PostsView {...this.props} />
  }
}

const mapStateToProps = (state) => {
  const { posts, loading } = state

  return {
    posts,
    loading
  }
}

const Posts = connect(mapStateToProps, {
  setPosts,
  toggleLoading
})(FetchPosts)

export default Posts
