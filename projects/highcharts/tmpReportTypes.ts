interface ReportField {
    description: string
    required: boolean
  }
  
  interface ReportColumn {
    name: string
    type: string
    units: string
  }
  
  // ReportRow[0] is a date formatted as yyyy-MM-dd, e.g. 2024-08-02
  // ReportRow[1] is the number of contributions for one day, but may be a number or a string
  export type ReportRow = [string, string | number]
  
  export interface VTReport {
    id: string
    name?: string
    fields?: {
      beginDate: ReportField
      endDate: ReportField
      orgId: ReportField
    },
    data?: {
      columns: ReportColumn[]
      rows: ReportRow[]
    }
  }
  
  export type VTCSVReport = string
  
  export enum ReportLabelByIdKey{
    'org_audio_comment_b' = 'Audio',
    'org_text_comment_b' = 'Text',
    'org_video_comment_b' = 'Video',
    'org_audio_page_b' = 'Audio',
    'org_document_page_b' = 'Document',
    'org_image_page_b' = 'Image',
    'org_presentation_page_b' = 'Presentation',
    'org_video_page_b' = 'Video'
  }
  