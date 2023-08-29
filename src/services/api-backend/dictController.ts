// @ts-ignore
/* eslint-disable */
import { request } from '@umijs/max';

/** addDict POST /dict/add */
export async function addDictUsingPOST(body: API.DictAddRequest, options?: { [key: string]: any }) {
  return request<API.BaseResponseLong_>('/dict/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** deleteDict POST /dict/delete */
export async function deleteDictUsingPOST(
  body: API.DeleteRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/dict/delete', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** editDict POST /dict/edit */
export async function editDictUsingPOST(
  body: API.DictEditRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/dict/edit', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** findFathers GET /dict/findFathers */
export async function findFathersUsingGET(options?: { [key: string]: any }) {
  return request<API.BaseResponseListDict_>('/dict/findFathers', {
    method: 'GET',
    ...(options || {}),
  });
}

/** getDictById GET /dict/get */
export async function getDictByIdUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDictByIdUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseDict_>('/dict/get', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** getDictByDictType GET /dict/getDictByDictType */
export async function getDictByDictTypeUsingGET(
  // 叠加生成的Param类型 (非body参数swagger默认没有生成对象)
  params: API.getDictByDictTypeUsingGETParams,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseListDict_>('/dict/getDictByDictType', {
    method: 'GET',
    params: {
      ...params,
    },
    ...(options || {}),
  });
}

/** listDictByPage POST /dict/list/page */
export async function listDictByPageUsingPOST(
  body: API.DictQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDict_>('/dict/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** listMyDictByPage POST /dict/my/list/page */
export async function listMyDictByPageUsingPOST(
  body: API.DictQueryRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponsePageDict_>('/dict/my/list/page', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}

/** updateDict POST /dict/update */
export async function updateDictUsingPOST(
  body: API.DictUpdateRequest,
  options?: { [key: string]: any },
) {
  return request<API.BaseResponseBoolean_>('/dict/update', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    data: body,
    ...(options || {}),
  });
}
