import request from '@/utils/request'
import type { AjaxResult, TableDataInfo, NursingQueryParams, NursingProject } from '@/types'

// 查询护理项目列表
export function listNursing(query: NursingQueryParams): Promise<TableDataInfo<NursingProject[]>> {
  return request({
    url: '/system/nursing/list',
    method: 'get',
    params: query
  })
}

// 查询护理项目详细
export function getNursing(id: number): Promise<AjaxResult<NursingProject>> {
  return request({
    url: '/system/nursing/' + id,
    method: 'get'
  })
}

// 新增护理项目
export function addNursing(data: NursingProject): Promise<AjaxResult> {
  return request({
    url: '/system/nursing',
    method: 'post',
    data: data
  })
}

// 修改护理项目
export function updateNursing(data: NursingProject): Promise<AjaxResult> {
  return request({
    url: '/system/nursing',
    method: 'put',
    data: data
  })
}

// 删除护理项目
export function delNursing(id: number | number[]): Promise<AjaxResult> {
  return request({
    url: '/system/nursing/' + id,
    method: 'delete'
  })
}


