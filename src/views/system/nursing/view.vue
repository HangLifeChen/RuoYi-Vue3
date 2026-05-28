<template>
  <el-drawer title="护理项目详情" v-model="visible" direction="rtl" size="60%" append-to-body :before-close="handleClose" class="detail-drawer">
    <div v-loading="loading" class="drawer-content">
      <h4 class="section-header">基本信息</h4>
      <el-row :gutter="20" class="mb8">
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">名称：</label>
            <span class="info-value plaintext">
              {{ info.name }}
            </span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">排序号：</label>
            <span class="info-value plaintext">
              {{ info.orderNo }}
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb8">
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">单位：</label>
            <span class="info-value plaintext">
              {{ info.unit }}
            </span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">价格：</label>
            <span class="info-value plaintext">
              {{ info.price }}
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb8">
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">图片：</label>
            <span class="info-value plaintext">
              <image-preview :src="info.image" :width="60" :height="60" />
            </span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">护理要求：</label>
            <span class="info-value plaintext">
              {{ info.nursingRequirement }}
            </span>
          </div>
        </el-col>
      </el-row>
      <el-row :gutter="20" class="mb8">
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">状态：</label>
            <span class="info-value plaintext">
              {{ info.status }}
            </span>
          </div>
        </el-col>
        <el-col :span="12">
          <div class="info-item">
            <label class="info-label">备注：</label>
            <span class="info-value plaintext">
              {{ info.remark }}
            </span>
          </div>
        </el-col>
      </el-row>
    </div>
  </el-drawer>
</template>

<script setup lang="ts" name="NursingViewDrawer">
import type { NursingProject } from "@/types/api/system/nursing"
import { getNursing } from '@/api/system/nursing'

const visible = ref<boolean>(false)
const loading = ref<boolean>(false)
const info = reactive<Partial<NursingProject>>({})

const open = async (id: number): Promise<void> => {
  visible.value = true
  loading.value = true
  try {
    const res = await getNursing(id)
    Object.assign(info, res.data ?? {})
  } catch (error) {
    console.error('获取护理项目信息失败:', error)
  } finally {
    loading.value = false
  }
}

const handleClose = (): void => {
  visible.value = false
  Object.keys(info).forEach(key => delete (info as any)[key])
}

defineExpose({ open })
</script>
