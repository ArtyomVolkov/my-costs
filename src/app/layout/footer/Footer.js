import React, {Component} from 'react';
// Styles
import './style.scss';

class Footer extends Component {
  constructor (props) {
    super(props);

    this.technologies = [
      {
        key: 'react',
        title: 'ReactJS',
        imageURL: 'https://coderscantabria.files.wordpress.com/2017/11/react.png',
        link: 'https://reactjs.org'
      },
      {
        key: 'redux',
        title: 'Redux',
        imageURL: 'http://blog.js-republic.com/wp-content/uploads/2016/11/logo-redux.png',
        link: 'https://redux.js.org'
      },
      {
        key: 'websql',
        title: 'WebSQL',
        imageURL: 'https://www.shareicon.net/data/512x512/2015/10/24/660964_database_512x512.png',
        link: 'https://dev.w3.org/html5/webdatabase/'
      },
      {
        key: 'webpack',
        title: 'Webpack',
        imageURL: 'https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/225/full/webpack_logo.png',
        link: 'https://webpack.js.org'
      },
      {
        key: 'ES6',
        title: 'ES6',
        imageURL: 'https://d2eip9sf3oo6c2.cloudfront.net/series/square_covers/000/000/049/full/EGH_LearnES6_Final.png',
        link: 'http://es6-features.org'
      },
      {
        key: 'sass',
        title: 'Sass',
        imageURL: 'http://thimblecss.com/images/sass.png',
        link: 'https://sass-lang.com'
      },
      {
        key: 'm-ui',
        title: 'Material UI',
        imageURL: 'https://material-ui.com/static/images/material-ui-logo.svg',
        link: 'https://material-ui.com/',
      }
    ];
  }

  onOpenDetails (e, item) {
    window.open(item.link);
  }

  render () {
    return (
      <footer>
        <div className='footer-content'>
          {
            this.technologies.map((item) => {
              return (
                <img
                  key={item.key}
                  src={item.imageURL}
                  alt={item.title}
                  title={item.title}
                  onClick={(e) => this.onOpenDetails(e, item)}
                />
              );
            })}
        </div>
      </footer>
    );
  }
}

export default Footer;
