import type { RequestConfig } from '@umijs/max';
import { message } from 'antd';

// 错误处理方案： 错误类型
enum ErrorShowType {
  SILENT = 0,
  WARN_MESSAGE = 1,
  ERROR_MESSAGE = 2,
  NOTIFICATION = 3,
  REDIRECT = 9,
}
// 与后端约定的响应数据格式
interface ResponseStructure {
  success: boolean;
  data: any;
  errorCode?: number;
  errorMessage?: string;
  showType?: ErrorShowType;
}

/**
 * @name 错误处理
 * pro 自带的错误处理， 可以在这里做自己的改动
 * @doc https://umijs.org/docs/max/request#配置
 */
export const errorConfig: RequestConfig = {
  baseURL: '/api',
  // 错误处理： umi@3 的错误处理方案。
  errorConfig: {
    // 错误接收及处理
    errorHandler: (error: any, opts: any) => {
      if (opts?.skipErrorHandler) throw error;
      message.error(error);
    },
  },

  // 响应拦截器
  responseInterceptors: [
    (response: any) => {
      // 拦截响应数据，进行个性化处理
      // data: res 重新分配参数
      const { data: res } = response as unknown as ResponseStructure;
      if (res?.success === false) {
        throw Error('请求错误');
      }
      const { code, message: msg, data } = res;
      if (code !== 0) {
        return Promise.reject(msg);
      }
      /**
       * TODO 这里返回response，实际后面调用获取的是response.data，也就是{ code, message, data }
       * 官方说通过配置 request.dataField = '' 可以获取原始数据，实际上未生效
       */
      return response;
    },
  ],
};
