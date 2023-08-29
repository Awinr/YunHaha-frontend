declare namespace API {
  type Assistant = {
    createTime?: string;
    dictId?: number;
    execMessage?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    questionRes?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type AssistantAddRequest = {
    dictId?: number;
    execMessage?: string;
    goal?: string;
    name?: string;
    questionRes?: string;
    userId?: number;
  };

  type AssistantEditRequest = {
    dictId?: number;
    execMessage?: string;
    goal?: string;
    id?: number;
    name?: string;
    questionRes?: string;
    status?: string;
  };

  type AssistantQueryRequest = {
    current?: number;
    dictId?: number;
    execMessage?: string;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    questionRes?: string;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    userId?: number;
  };

  type AssistantUpdateRequest = {
    dictId?: number;
    execMessage?: string;
    goal?: string;
    id?: number;
    name?: string;
    questionRes?: string;
    status?: string;
    userId?: number;
  };

  type BaseResponseAssistant_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseBoolean_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseChart_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseChartVO_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseDict_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseListDict_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseLong_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseObject_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageAssistant_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageChart_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageDict_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUser_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponsePageUserVO_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseString_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUser_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type BaseResponseUserVO_ = {
    code?: number;
    data?: Record<string, any>;
    message?: string;
  };

  type Chart = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    execMessage?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type ChartAddRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    name?: string;
  };

  type ChartEditRequest = {
    chartData?: string;
    chartType?: string;
    goal?: string;
    id?: number;
    name?: string;
  };

  type ChartQueryRequest = {
    chartType?: string;
    current?: number;
    goal?: string;
    id?: number;
    name?: string;
    pageSize?: number;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    userId?: number;
  };

  type ChartUpdateRequest = {
    chartData?: string;
    chartType?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    isDelete?: number;
    name?: string;
    updateTime?: string;
  };

  type ChartVO = {
    charType?: string;
    chartData?: string;
    createTime?: string;
    genChart?: string;
    genResult?: string;
    goal?: string;
    id?: number;
    name?: string;
    updateTime?: string;
    userId?: number;
  };

  type checkUsingGETParams = {
    /** echostr */
    echostr?: string;
    /** nonce */
    nonce?: string;
    /** signature */
    signature?: string;
    /** timestamp */
    timestamp?: string;
  };

  type DeleteRequest = {
    id?: number;
  };

  type Dict = {
    createTime?: string;
    dictLabel?: string;
    dictName?: string;
    dictSort?: number;
    dictType?: string;
    dictValue?: string;
    fid?: number;
    id?: number;
    isDelete?: number;
    remark?: string;
    status?: string;
    updateTime?: string;
    userId?: number;
  };

  type DictAddRequest = {
    dictLabel?: string;
    dictName?: string;
    dictSort?: number;
    dictType?: string;
    dictValue?: string;
    fid?: number;
    remark?: string;
    userId?: number;
  };

  type DictEditRequest = {
    dictLabel?: string;
    dictName?: string;
    dictSort?: number;
    dictType?: string;
    dictValue?: string;
    fid?: number;
    id?: number;
    remark?: string;
    status?: string;
  };

  type DictQueryRequest = {
    current?: number;
    dictLabel?: string;
    dictName?: string;
    dictSort?: number;
    dictType?: string;
    dictValue?: string;
    fid?: number;
    id?: number;
    pageSize?: number;
    remark?: string;
    sortField?: string;
    sortOrder?: string;
    status?: string;
    userId?: number;
  };

  type DictUpdateRequest = {
    dictLabel?: string;
    dictName?: string;
    dictSort?: number;
    dictType?: string;
    dictValue?: string;
    fid?: number;
    id?: number;
    remark?: string;
    status?: string;
    userId?: number;
  };

  type GenApiKeysRequest = {
    accessKey?: string;
    sercetKey?: string;
  };

  type genChartByAIAsyncUsingPOSTParams = {
    chartType?: string;
    dictId?: number;
    goal?: string;
    name?: string;
  };

  type GenChartByAIRequest = {
    chartType?: string;
    dictId?: number;
    goal?: string;
    name?: string;
  };

  type genChartByAIUsingPOSTParams = {
    chartType?: string;
    dictId?: number;
    goal?: string;
    name?: string;
  };

  type getAssistantByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getChartByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getDictByDictTypeUsingGETParams = {
    /** dictType */
    dictType: string;
  };

  type getDictByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type getUserVOByIdUsingGETParams = {
    /** id */
    id?: number;
  };

  type OrderItem = {
    asc?: boolean;
    column?: string;
  };

  type PageAssistant_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageChart_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageDict_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUser_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type PageUserVO_ = {
    countId?: string;
    current?: number;
    maxLimit?: number;
    optimizeCountSql?: boolean;
    orders?: OrderItem[];
    pages?: number;
    records?: Record<string, any>[];
    searchCount?: boolean;
    size?: number;
    total?: number;
  };

  type uploadFileUsingPOSTParams = {
    biz?: string;
  };

  type User = {
    accessKey?: string;
    createTime?: string;
    id?: number;
    isDelete?: number;
    password?: string;
    realName?: string;
    sercetKey?: string;
    updateTime?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };

  type UserAddRequest = {
    realName?: string;
    userAvatar?: string;
    userRole?: string;
    username?: string;
  };

  type userLoginByWxOpenUsingGETParams = {
    /** code */
    code: string;
  };

  type UserLoginRequest = {
    password?: string;
    username?: string;
  };

  type UserQueryRequest = {
    current?: number;
    id?: number;
    pageSize?: number;
    realName?: string;
    sortField?: string;
    sortOrder?: string;
    userRole?: string;
    username?: string;
  };

  type UserRegisterRequest = {
    checkPassword?: string;
    password?: string;
    realName?: string;
    username?: string;
  };

  type UserUpdateMyRequest = {
    password?: string;
    realName?: string;
    userAvatar?: string;
    userProfile?: string;
  };

  type UserUpdateRequest = {
    id?: number;
    password?: string;
    realName?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
  };

  type UserVO = {
    accessKey?: string;
    createTime?: string;
    id?: number;
    realName?: string;
    sercetKey?: string;
    updateTime?: string;
    userAvatar?: string;
    userProfile?: string;
    userRole?: string;
    username?: string;
  };
}
