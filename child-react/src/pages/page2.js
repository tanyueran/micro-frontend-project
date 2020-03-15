import React from 'react'
import {Carousel} from 'antd';

export default (props) => {
  return <div>
    <Carousel style={{background: '#909090', height: '120px', width: '150px'}} autoplay>
      <div>
        <h3>1</h3>
      </div>
      <div>
        <h3>2</h3>
      </div>
      <div>
        <h3>3</h3>
      </div>
      <div>
        <h3>4</h3>
      </div>
    </Carousel>
  </div>
}