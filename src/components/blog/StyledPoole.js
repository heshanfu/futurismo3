import styled from 'styled-components'

const StyledPoole = styled.div`
  * {
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    font-family: 'Sawarabi Gothic';
  }

  html,
  body {
    margin: 0;
    padding: 0;
  }

  html {
    font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
    font-size: 16px;
    line-height: 1.5;
  }
  @media (min-width: 38em) {
    html {
      font-size: 20px;
    }
  }

  body {
    color: #515151;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }

  a {
    color: #268bd2;
    text-decoration: none;
  }
  a strong {
    color: inherit;
  }
  a:hover,
  a:focus {
    text-decoration: underline;
    color: #717171;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 0.5rem;
    font-weight: bold;
    line-height: 1.25;
    color: #313131;
    text-rendering: optimizeLegibility;
  }
  h1 {
    font-size: 2rem;
    border-bottom: 1px solid #eaecef;
  }
  h2 {
    margin-top: 1rem;
    font-size: 1.5rem;
    border-bottom: 1px solid #eaecef;
  }
  h3 {
    margin-top: 1.5rem;
    font-size: 1.25rem;
  }
  h4,
  h5,
  h6 {
    margin-top: 1rem;
    font-size: 1rem;
  }

  /* Body text */
  p {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  strong {
    color: #303030;
  }

  /* Lists */
  ul,
  ol,
  dl {
    margin-top: 0;
    margin-bottom: 1rem;
  }

  ul li,
  ol li {
    line-height: 1.5; /*文の行高*/
  }

  dt {
    font-weight: bold;
  }
  dd {
    margin-bottom: 0.5rem;
  }

  /* Misc */
  hr {
    position: relative;
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid #eee;
    border-bottom: 1px solid #fff;
  }

  abbr {
    font-size: 85%;
    font-weight: bold;
    color: #555;
    text-transform: uppercase;
  }
  abbr[title] {
    cursor: help;
    border-bottom: 1px dotted #e5e5e5;
  }

  /* Pygments via Jekyll */
  .highlight {
    margin-bottom: 1rem;
    border-radius: 4px;
  }
  .highlight pre {
    margin-bottom: 0;
  }

  /* Gist via GitHub Pages */
  .gist .gist-file {
    font-family: Menlo, Monaco, 'Courier New', monospace;
  }
  .gist .markdown-body {
    padding: 15px;
  }
  .gist pre {
    padding: 0;
    background-color: transparent;
  }
  .gist .gist-file .gist-data {
    font-size: 0.8rem;
    line-height: 1.4;
  }
  .gist code {
    padding: 0;
    color: inherit;
    background-color: transparent;
    border-radius: 0;
  }

  /* Quotes */
  blockquote {
    padding: 0.5rem 1rem;
    margin: 0.8rem 0;
    color: #7a7a7a;
    border-left: 0.25rem solid #e5e5e5;
  }
  blockquote p:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 30em) {
    blockquote {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }

  img {
    display: block;
    max-width: 100%;
    margin: 0 0 1rem;
    border-radius: 5px;
  }

  /* Tables */
  table {
    margin-bottom: 1rem;
    width: 100%;
    border: 1px solid #e5e5e5;
    border-collapse: collapse;
  }
  td,
  th {
    padding: 0.25rem 0.5rem;
    border: 1px solid #e5e5e5;
  }
  tbody tr:nth-child(odd) td,
  tbody tr:nth-child(odd) th {
    background-color: #f9f9f9;
  }

  .lead {
    font-size: 1.25rem;
    font-weight: 300;
  }

  .message {
    margin-bottom: 1rem;
    padding: 1rem;
    color: #717171;
    background-color: #f9f9f9;
  }

  /*
  * Container
  *
  * Center the page content.
  */

  .container {
    max-width: 45rem;
    padding-left: 1rem;
    padding-right: 1rem;
    margin-left: auto;
    margin-right: auto！;
  }

  /*
  * Masthead
  *
  * Super small header above the content for site name and short description.
  */

  .masthead {
    padding-top: 1rem;
    padding-bottom: 1rem;
    margin-bottom: 3rem;
  }
  .masthead-title {
    margin-top: 0;
    margin-bottom: 0;
    color: #505050;
  }
  .masthead-title a {
    color: #505050;
  }
  .masthead-title small {
    font-size: 75%;
    font-weight: 400;
    color: #c0c0c0;
    letter-spacing: 0;
  }

  .page,
  .post {
    margin-bottom: 4em;
  }

  /* Blog post or page title */
  .page-title,
  .post-title,
  .post-title a {
    color: #303030;
  }
  .page-title,
  .post-title {
    margin-top: 0;
  }

  /* Meta data line below post title */
  .post-date {
    display: block;
    margin-top: -0.5rem;
    margin-bottom: 1rem;
    color: #9a9a9a;
  }

  /* Related posts */
  .related {
    padding-top: 2rem;
    padding-bottom: 2rem;
    border-top: 1px solid #eee;
  }
  .related-posts {
    padding-left: 0;
    list-style: none;
  }
  .related-posts h3 {
    margin-top: 0;
  }
  .related-posts li small {
    font-size: 75%;
    color: #999;
  }
  .related-posts li a:hover {
    color: #268bd2;
    text-decoration: none;
  }
  .related-posts li a:hover small {
    color: inherit;
  }

  .pagination {
    overflow: hidden; /* clearfix */
    margin-left: -1rem;
    margin-right: -1rem;
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
    color: #ccc;
    text-align: center;
  }

  .pagination-item {
    display: block;
    padding: 1rem;
    border: 1px solid #eee;
  }
  .pagination-item:first-child {
    margin-bottom: -1px;
  }

  /* Only provide a hover state for linked pagination items */
  a.pagination-item:hover {
    background-color: #f5f5f5;
  }

  @media (min-width: 30em) {
    .pagination {
      margin: 3rem 0;
    }
    .pagination-item {
      float: left;
      width: 50%;
    }
    .pagination-item:first-child {
      margin-bottom: 0;
      border-top-left-radius: 4px;
      border-bottom-left-radius: 4px;
    }
    .pagination-item:last-child {
      margin-left: -1px;
      border-top-right-radius: 4px;
      border-bottom-right-radius: 4px;
    }
  }
`
export default StyledPoole
