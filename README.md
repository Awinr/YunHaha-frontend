# 光脑 BI

## Environment Prepare

Install `node_modules`:

```bash
npm/yarn install
```

## TODO

- openapi 生成的 data 都是 Record 类型?

```ts
type BaseResponsePageChart_ = {
  code?: number;
  data?: Record<string, any>;
  message?: string;
};
```

- 监听 ProTable 表单内容的变化，比如根据一个值的变化改变另外一个值
