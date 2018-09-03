import React from 'react';
import avatar from '../images/avatar.jpg';
import bg from '../images/bg.jpg';
import { injectGlobal } from 'styled-components'

import '../css/gatsby.css';
import '../css/main.css';

const applyBackground = (src) => {
  // TODO: Since body tag is not exposed we need to global style body. Find a better way by refectoring css to be JS
  // TODO: Add option to change overlay image
  // TODO: Add option to adjust / add the linear gradiant

  injectGlobal`
    body {
      height: 100%;
  		background-color: #ffffff;
  		background-image: url(${src});
  		background-image: url(${src});
  		background-image: url(${src});
  		background-image: url(${src});
  		background-repeat: no-repeat;
  		background-size: cover;
  		background-position: top left, center center, bottom center;
  		background-attachment: fixed;
    }
  `;
}

class Index extends React.Component {
  constructor(props) {
    super(props)
    this.default = {

      bio: {
        name: 'Jane Doe',
        headline: 'senior psychonautics engineer',
        photo: {
          sizes: {
            src: avatar,
          },
        }
      },

      backgroundImage: {
        sizes: {
          title: 'mountains',
          sizes: {
            src: bg,
          }
        }
      },

      socialIcons: {
        edges: [
          {
            node: {
              className: 'fa-twitter',
              url: 'https://twitter.com',
            }
          },
          {
            node: {
              className: 'fa-instagram',
              url: 'https://instagram.com',
              name: 'Instagram',
            },
          },
          {
            node: {
              className: 'fa-facebook',
              url: 'https://facebook.com',
              name: 'Facebook',
            },
          },
        ],
      }
    }

    // data config
    this.data = this.props.pageContext.data
    this.bio = this.data.bio || this.default.displayName
    this.socialIcons = this.data.socialIcons || this.default.socialIcons
    this.backgroundImage = this.data.backgroundImage || this.default.backgroundImage
  }


  render() {

    applyBackground(this.backgroundImage.sizes.src)

    return (
    	<div id="wrapper">

    		<section id="main">
    			<header>
    				<span className="avatar">
              <img
                src={this.bio.photo.sizes.src} alt="" />
            </span>
    				<h1>{this.bio.displayName}</h1>
    				<p>{this.bio.headline}</p>
    			</header>

    			<footer>
    				<ul className="icons">
              {this.socialIcons.edges.map((obj, idx) => {
                const { name, url, className } = obj.node
                return (
                  <li key={idx}>
                    <a href={url} className={className}>{name}</a>
                  </li>
                )
              })}
    				</ul>
    			</footer>
    		</section>

    		<footer id="footer">
    			<ul className="copyright">

    				<li>&copy; Hello World</li>
            <li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
    			</ul>
    		</footer>

    	</div>
    )
  }
}

export default Index

// TODO: figure out a way to do string interpolation on graphql query
