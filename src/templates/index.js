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

  render() {

    applyBackground(bg)

    return (
    	<div id="wrapper">

    		<section id="main">
    			<header>
    				<span className="avatar">
              <img
                src={avatar} alt="" />
            </span>
    				<h1>Jane Doe</h1>
    				<p>senior psychonautics engineer</p>
    			</header>

    			<footer>
    				<ul className="icons">
              <li>
                <a href="https://twitter.com" className="fa-twitter">Twitter</a>
              </li>
              <li>
                <a href="https://facebook.com" className="fa-facebook">Facebook</a>
              </li>
              <li>
                <a href="https://instagram.com" className="fa-instagram">Instagram</a>
              </li>
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
