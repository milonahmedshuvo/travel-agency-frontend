'use client'

import { LoadingOutlined } from '@ant-design/icons';
import { Flex, Spin } from 'antd';

const Loading = () => (
  <Flex
    justify="center"
    align="center"
    style={{
      height: '100vh', // full viewport height
      width: '100vw',  // full viewport width
      backgroundColor: '#f5f5f5', // light background (optional)
    }}
  >
    <Spin
      indicator={
        <LoadingOutlined style={{ fontSize: 64, color: '#1890ff' }} spin />
      }
      tip="Loading..."
      size="large"
    />
  </Flex>
);

export default Loading;
