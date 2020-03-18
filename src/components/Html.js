import React from 'react';

const Html = ({ children, scripts }) => (
  <html>
    <head>
      <meta charSet="UTF-8" />
      <title>Server Side Rendered React App!!</title>
    </head>
    <body>
      <div
        id="app"
        dangerouslySetInnerHTML={{ __html: children }}
      />

      {scripts.map((item, index) => <script key={index} src={item} />)}
    </body>
  </html>
);

export default Html;
