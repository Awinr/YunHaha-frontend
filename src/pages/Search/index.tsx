import { listUserByPageUsingPOST } from '@/services/api-backend/userController';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons/lib';
import { Avatar, Card, Col, Divider, Input, Pagination, PaginationProps, Row } from 'antd';
import { Meta } from 'antd/es/list/Item';
import React, { useState } from 'react';

const { Search } = Input;

/**
 * 添加图表页面
 * @constructor
 */
const AddChart: React.FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [list, setList] = useState<API.User[] | undefined>([]);
  const [total, setTotal] = useState<number | undefined>(0);

  /**
   * onSearch
   * @param values
   */
  const onSearch = async (values: any) => {
    setLoading(true);
    const req: API.UserQueryRequest = {
      current: 1,
      pageSize: 10,
      username: values,
    };
    const res = await listUserByPageUsingPOST(req);
    setList(res?.data?.records);
    setTotal(res?.data?.total);
    setLoading(false);
  };

  // useEffect(() => {
  //   initList();
  // }, []);

  const renderCard = () => {
    return list.map((item, index) => {
      //循环用.map
      return (
        <Col key={index} span={6}>
          <Card
            cover={
              <img
                alt="example"
                src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
              />
            }
            actions={[
              <SettingOutlined key="setting" />,
              <EditOutlined key="edit" />,
              <EllipsisOutlined key="ellipsis" />,
            ]}
          >
            <Meta
              avatar={<Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel" />}
              title={item.realName}
              description="This is the description"
            />
          </Card>
        </Col>
      );
    });
  };

  const onChange: PaginationProps['onChange'] = (current, pageSize) => {
    console.log(current, pageSize);
  };

  return (
    <>
      <Row gutter={24}>
        <Col span={16} offset={4}>
          <Search
            placeholder="请输入搜索内容"
            allowClear
            enterButton="搜索"
            size="large"
            onSearch={onSearch}
            loading={loading}
          />
        </Col>
      </Row>
      <Divider />
      <Row gutter={[50, 50]}>{renderCard()}</Row>
      {list && list.length > 0 && (
        <>
          <Divider />
          <Row justify="end">
            <Col>
              <Pagination
                showSizeChanger
                onChange={onChange}
                defaultCurrent={1}
                total={total}
                showTotal={(total) => `共 ${total} 条`}
              />
            </Col>
          </Row>
        </>
      )}
    </>
  );
};
export default AddChart;
