// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addAssistant POST /assistant/add */
export async function addAssistantUsingPOST(
  body: API.AssistantAddRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseLong_>('/assistant/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** aiAssistant POST /assistant/aiAssistant */
export async function aiAssistantUsingPOST(
  body: API.GenChartByAIRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseObject_>('/assistant/aiAssistant', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteAssistant POST /assistant/delete */
export async function deleteAssistantUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/assistant/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editAssistant POST /assistant/edit */
export async function editAssistantUsingPOST(
  body: API.AssistantEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/assistant/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** getAssistantById GET /assistant/get */
export async function getAssistantByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getAssistantByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseAssistant_>('/assistant/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listAssistantByPage POST /assistant/list/page */
export async function listAssistantByPageUsingPOST(
  body: API.AssistantQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAssistant_>('/assistant/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyAssistantByPage POST /assistant/my/list/page */
export async function listMyAssistantByPageUsingPOST(
  body: API.AssistantQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageAssistant_>('/assistant/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateAssistant POST /assistant/update */
export async function updateAssistantUsingPOST(
  body: API.AssistantUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/assistant/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
