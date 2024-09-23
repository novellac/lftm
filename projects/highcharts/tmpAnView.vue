<template>
    <BaseToggleButton
      v-if="isDev"
      :is-pressed="useMockData"
      label="Use mock data (for devs)"
      @click="useMockData = !useMockData"
    />
  
    <ChartWrapper
      v-if="commentsChartOpts"
      chart-type="pie"
      :title="translate('charts.titlesWithTotals.comments', {total: commentsSeriesTotal})"
      :chart-options="commentsChartOpts"
      :loading="commentsLoading"
    />
  
    <SeparatorBar />
  
    <ChartWrapper
      v-if="slidesCreatedChartOpts"
      chart-type="pie"
      :title="translate('charts.titlesWithTotals.slidesCreated', {total: slidesCreatedSeriesTotal})"
      :chart-options="slidesCreatedChartOpts"
      :loading="slidesCreatedLoading"
    />
  
    <SeparatorBar />
  </template>
  
  <script setup lang="ts">
  import ChartWrapper from '@shared/components/graphic/charts/ChartWrapper.vue'
  import SeparatorBar from '@shared/components/graphic/SeparatorBar.vue'
  
  import SetupPieChart from '@shared/features/SetupPieChart'
  
  import { useStore as useOrgStore } from '@/stores/org'
  import Env from '@shared/libraries/Env'
  import { format, sub } from 'date-fns'
  
  import { computed, ref } from 'vue'
  import { translate } from '@shared/plugins/i18n'
  
  const isDev = computed(() => { return Env.DEV })
  const useMockData = ref(false)
  
  const orgId = useOrgStore().org.id
  
  const dateNow = Date.now()
  const beginDate = ref(format(sub(dateNow, { months: 1 }), 'yyyy-MM-dd'))
  const endDate = ref(format(dateNow, 'yyyy-MM-dd'))
  
  const commentsIds = ['org_audio_comment_b', 'org_text_comment_b', 'org_video_comment_b']
  const { anyLoading: commentsLoading, chartOpts: commentsChartOpts, seriesTotal: commentsSeriesTotal } = SetupPieChart({ useMockData, ids: commentsIds, orgId, beginDate, endDate, seriesAccName: translate('charts.seriesAccNames.commentsByType') })
  
  const slidesCreatedIds = ['org_audio_page_b', 'org_document_page_b', 'org_image_page_b', 'org_presentation_page_b', 'org_video_page_b']
  const { anyLoading: slidesCreatedLoading, chartOpts: slidesCreatedChartOpts, seriesTotal: slidesCreatedSeriesTotal } = SetupPieChart({ useMockData, ids: slidesCreatedIds, orgId, beginDate, endDate, seriesAccName: translate('charts.seriesAccNames.slidesCreatedByType') })
  
  </script>
  