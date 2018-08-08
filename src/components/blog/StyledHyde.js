import styled from 'styled-components'

const StyledHyde = styled.div`
  html {
    font-family: 'PT Sans', Helvetica, Arial, sans-serif;
  }
  @media (min-width: 48em) {
    html {
      font-size: 16px;
    }
  }
  @media (min-width: 58em) {
    html {
      font-size: 20px;
    }
  }

  .sidebar {
    text-align: center;
    padding: 2rem 1rem;
    color: rgba(255, 255, 255, 0.5);
    background-color: #202020;
  }
  @media (min-width: 48em) {
    .sidebar {
      position: fixed;
      top: 0;
      left: 0;
      bottom: 0;
      width: 18rem;
      text-align: left;
    }
  }

  /* Sidebar links */
  .sidebar a {
    color: #fff;
  }

  /* About section */
  .sidebar-about h1 {
    color: #fff;
    margin-top: 0;
    font-family: 'Abril Fatface', serif;
    font-size: 2.25rem;
  }

  /* Sidebar nav */
  .sidebar-nav {
    margin-bottom: 1rem;
  }
  .sidebar-nav-item {
    display: block;
    line-height: 1.75;
  }
  a.sidebar-nav-item:hover,
  a.sidebar-nav-item:focus {
    text-decoration: underline;
  }
  .sidebar-nav-item.active {
    font-weight: bold;
  }

  @media (min-width: 48em) {
    .sidebar-sticky {
      position: absolute;
      right: 1rem;
      bottom: 1rem;
      left: 1rem;
    }
  }

  .content {
    padding-top: 4rem;
    padding-bottom: 4rem;
  }

  @media (min-width: 48em) {
    .content {
      max-width: 38rem;
      margin-left: 20rem;
      margin-right: 2rem;
    }
  }

  @media (min-width: 64em) {
    .content {
      margin-left: 22rem;
      margin-right: 4rem;
    }
  }

  @media (min-width: 48em) {
    .layout-reverse .sidebar {
      left: auto;
      right: 0;
    }
    .layout-reverse .content {
      margin-left: 2rem;
      margin-right: 20rem;
    }
  }

  @media (min-width: 64em) {
    .layout-reverse .content {
      margin-left: 4rem;
      margin-right: 22rem;
    }
  }

  /* Red */
  .theme-base-08 .sidebar {
    background-color: #ac4142;
  }
  .theme-base-08 .content a,
  .theme-base-08 .related-posts li a:hover {
    color: #ac4142;
  }

  /* Orange */
  .theme-base-09 .sidebar {
    background-color: #d28445;
  }
  .theme-base-09 .content a,
  .theme-base-09 .related-posts li a:hover {
    color: #d28445;
  }

  /* Yellow */
  .theme-base-0a .sidebar {
    background-color: #f4bf75;
  }
  .theme-base-0a .content a,
  .theme-base-0a .related-posts li a:hover {
    color: #f4bf75;
  }

  /* Green */
  .theme-base-0b .sidebar {
    background-color: #90a959;
  }
  .theme-base-0b .content a,
  .theme-base-0b .related-posts li a:hover {
    color: #90a959;
  }

  /* Cyan */
  .theme-base-0c .sidebar {
    background-color: #75b5aa;
  }
  .theme-base-0c .content a,
  .theme-base-0c .related-posts li a:hover {
    color: #75b5aa;
  }

  /* Blue */
  .theme-base-0d .sidebar {
    background-color: #6a9fb5;
  }
  .theme-base-0d .content a,
  .theme-base-0d .related-posts li a:hover {
    color: #6a9fb5;
  }

  /* Magenta */
  .theme-base-0e .sidebar {
    background-color: #aa759f;
  }
  .theme-base-0e .content a,
  .theme-base-0e .related-posts li a:hover {
    color: #aa759f;
  }

  /* Brown */
  .theme-base-0f .sidebar {
    background-color: #8f5536;
  }
  .theme-base-0f .content a,
  .theme-base-0f .related-posts li a:hover {
    color: #8f5536;
  }
`
export default StyledHyde
