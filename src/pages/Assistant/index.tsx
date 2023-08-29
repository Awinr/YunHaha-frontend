import { aiAssistantUsingPOST } from '@/services/api-backend/assistantController';
import { getDictByDictTypeUsingGET } from '@/services/api-backend/dictController';
import {Button, Card, Col, Divider, Form, FormInstance, Input, message, Row, Select, Space, Spin} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import React, { useEffect, useState } from 'react';

/**
 * 添加图表页面
 * @constructor
 */
const Assistant: React.FC = () => {
  const [result, setResult] = useState<any>();
  const [submitting, setSubmitting] = useState<boolean>(false);
  const [options, setOptions] = useState<{ label: any; value: any }[]>([]);
  const formRef = React.useRef<FormInstance>(null);


  const initOptions = async () => {
    const res = await getDictByDictTypeUsingGET({ dictType: 'tech_types' });
    if (res.code === 0) {
      const { data } = res;
      const arr: { label: any; value: any }[] = [];
      data?.forEach((e: API.Dict) => {
        arr.push({ label: e.dictLabel, value: e.id });
      });
      setOptions(arr);
    }
  };

  useEffect(() => {
    initOptions();
  }, []);

  /**
   * 提交
   * @param values
   */
  const onFinish = async (values: any) => {
    console.log(values);
    // 避免重复提交
    if (submitting) {
      return;
    }
    setSubmitting(true);

    try {
      const res = await aiAssistantUsingPOST(values);
      if (!res?.data) {
        message.error('操作失败');
      } else {
        message.success('操作成功，稍后在我的问答中查看结果');
        formRef.current?.resetFields();
        // setResult(res?.data?.questionRes);
      }
    } catch (e: any) {
      message.error('分析失败，' + e.message);
    }
    setSubmitting(false);
  };

  return (
    <div className="add-chart">
      <Row gutter={24}>
        <Col span={24}>
          <Card title="问答助手">
            <Form
              name="addChart"
              labelAlign="left"
              labelCol={{ span: 4 }}
              wrapperCol={{ span: 12 }}
              onFinish={onFinish}
              initialValues={{}}
              ref={formRef}
            >
              <Form.Item
                name="name"
                label="问题名称"
                rules={[{ required: true, message: '请输入您的问题名称' }]}
              >
                <Input placeholder="请输入问题名称" />
              </Form.Item>
              <Form.Item
                label="问题类型"
                name="dictId"
                tooltip={'没有您想要的类型？在数据字典添加后选择'}
                rules={[{ required: true, message: '请选择您的问题类型' }]}
              >
                <Select options={options} ></Select>
              </Form.Item>
              <Form.Item
                name="goal"
                label="问题概述"
                rules={[{ required: true, message: '请输入您的问题' }]}
              >
                <TextArea placeholder="请输入您的问题，比如：怎么快速学习SpringBoot" />
              </Form.Item>

              <Form.Item wrapperCol={{ span: 16, offset: 4 }}>
                <Space>
                  <Button
                    type="primary"
                    htmlType="submit"
                    loading={submitting}
                    disabled={submitting}
                  >
                    提交
                  </Button>
                  <Button htmlType="reset">重置</Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
        {/*<Col span={12}>
          <Card title="AI建议">
            {result ?? <div>请先在左侧进行提交</div>}
            <Spin spinning={submitting} />
          </Card>
          <Divider />
        </Col>*/}
      </Row>
    </div>
  );
};
export default Assistant;
