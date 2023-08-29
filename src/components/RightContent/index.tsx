import { QuestionCircleOutlined } from '@ant-design/icons';
import '@umijs/max';
export type SiderTheme = 'light' | 'dark';
export const SelectLang = () => {
  return <></>;
};
export const Question = () => {
  return (
    <div
      style={{
        display: 'flex',
        height: 26,
      }}
      onClick={() => {
        window.open('https://ant-design.gitee.io/index-cn');
      }}
    >
      <QuestionCircleOutlined />
    </div>
  );
};
