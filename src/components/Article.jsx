import { Component } from "react";
import ArticleList from './ArticleList'

 // Renders all Articles
  class Article extends Component {
    constructor(props) {
      super(props);
      this.state = {
        ...this.state,
      };
    }
  
    render() {
      return (
        <div>
            <ArticleList apiKey={import.meta.env.VITE_API_KEY}/>
        </div>
      );
    }
  }
  
  export default Article;