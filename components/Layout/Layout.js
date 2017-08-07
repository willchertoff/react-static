import React, { PropTypes } from 'react';
import cx from 'classnames';
import s from './Layout.css';

class Layout extends React.Component {

  static propTypes = {
    className: PropTypes.string,
  };

  render() {
    return (
      <div className={s.layout} ref={node => (this.root = node)}>
        <div className={s.inner}>
          <main className={s.main}>
            <div {...this.props} className={this.props.className} />
          </main>
        </div>
      </div>
    );
  }
}

export default Layout;
