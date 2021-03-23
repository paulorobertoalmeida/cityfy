import ReactDom from 'react-dom';
import React from "react";
import { PageHeader } from 'antd';
import { Navbar } from "react-bootstrap";


ReactDOM.render(
  <PageHeader
    className="site-page-header"
    onBack={() => null}
    title="Title"
    subTitle="This is a subtitle"
  />,
  mountNode,
);

export default Navbar;