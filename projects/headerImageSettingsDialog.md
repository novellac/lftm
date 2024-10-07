## Stuff to rip out for the settings deprecation
hideHeaderImageText
thumbnailURL
settings key from BE theme API call

## HeaderImageSettingsDialog.vue NEW, WORK IN PROGRESS

```<template>
  <LargeDialogCurtain
    :title="`${translate('settings.sections.settings.title')}: ${translate('labels.headerImage')}`"
    @closed="closeModal"
  >
    <BaseHeader level="2">
      {{ translate('labels.headerImage') }}
    </BaseHeader>
    <p>
      {{ translate('dialogs.headerImage.instructions') }}
    </p>

    <div class="mt-6 mb-8">
      <Loading
        v-if="fileIsUploading"
        class="flex justify-center"
      />
      <ThemeBanner
        v-if="previewImageSrc && !fileIsUploading"
        :img-src="previewImageSrc"
        :height="14"
      />

      <div
        class="flex flex-wrap items-center justify-center mt-4 mb-8"
      >
        <BaseButtonGlobal
          v-if="previewImageSrc"
          scheme="secondary"
          class="mx-2"
          icon="fas fa-times"
          data-test="removeHeaderButton"
          @click="previewImageSrc = ''"
        >
          {{ translate("actions.remove") }}
        </BaseButtonGlobal>

        <template v-else>
          <BaseButtonGlobal
            scheme="secondary"
            class="mx-2"
            icon="fas fa-cloud-upload-alt"
            data-test="uploadFileButton"
            @click="createPreviewFromUpload"
          >
            {{ translate("actions.uploadYourOwn") }}
          </BaseButtonGlobal>

          <BaseButtonGlobal
            class="mx-2"
            scheme="secondary"
            icon="fas fa-cloud-download-alt"
            data-test="webImportButton"
            @click="showWebImportModal = true"
          >
            {{ translate("actions.importWeb") }}
          </BaseButtonGlobal>
        </template>
      </div>
    </div>

    <WebImportDialog
      v-if="showWebImportModal"
      @closeWebImportDialog="showWebImportModal = false"
      @saveWebImport="createPreviewFromWeb"
      @close="showWebImportModal = false"
    />
  </LargeDialogCurtain>
</template>

<script setup lang="ts">
import { Theme } from '@shared/types'

import LargeDialogCurtain from '@shared/components/controls/dialogs/LargeDialogCurtain.vue'
import ThemeBanner from '@shared/components/graphic/ThemeBanner.vue'
import WebImportDialog from '@shared/components/dialogs/WebImportDialog.vue'

import SetupFileUploads from '@shared/features/SetupFileUploads'

import { PropType, Ref, ref } from 'vue'

const props = defineProps({
  headerImage: {
    type: String as PropType<Theme['headerURL']>,
    default: ''
  }
})

const emit = defineEmits<{
  'close': []
}>()

const showWebImportModal = ref(false)

const closeModal = () => {
  emit('close')
}

const { uploadLocalFile, getUploadedImage, fileIsUploading } = SetupFileUploads({ acceptedFileTypes: 'image*' })

const previewImageSrc: Ref<Theme['headerURL'] | ''> = ref(props.headerImage)

const createPreviewFromUpload = async () => {
  const mediaPath = await uploadLocalFile()

  if (!mediaPath) return

  previewImageSrc.value = getUploadedImage(mediaPath as string)
}

const createPreviewFromWeb = (src: {mediaPath: Theme['headerURL']}) => {
  previewImageSrc.value = src.mediaPath

  showWebImportModal.value = false
}
</script>
```

## HeaderImageSettingsDialog.stories OLD

```
import { action } from '@storybook/addon-actions'

import mdx from './HeaderImageSettingsDialog.mdx'

import HeaderImageSettingsDialog from '@shared/components/dialogs/HeaderImageSettingsDialog.vue'
import BaseButtonGlobal from '@shared/components/controls/base/BaseButtonGlobal.vue'

import { ref } from 'vue'

export default {
  component: HeaderImageSettingsDialog,
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    headerImage: 'image1400x900.png'
  },
  argTypes: {}
}

const Template = (args) => ({
  setup () {
    const showDialog = ref(false)

    const doSaveHeader = (val) => {
      action('save:headerTheme')(val)
    }

    return { doSaveHeader, showDialog, args }
  },
  components: { HeaderImageSettingsDialog, BaseButtonGlobal },
  template: `
    <div>
      <BaseButtonGlobal
        @click="showDialog = true"
      >
        Show dialog
      </BaseButtonGlobal>

      <HeaderImageSettingsDialog
        v-if="showDialog"
        v-bind="args"
        @close="showDialog = false"
        @save:headerTheme="doSaveHeader"
      />
    </div>
    `
})

export const Base = Template.bind({})
```

## HeaderImageSettingsDialog.stories NEW

```
import { action } from '@storybook/addon-actions'

import mdx from './HeaderImageSettingsDialog.mdx'

import HeaderImageSettingsDialogNEW from '@shared/components/dialogs/HeaderImageSettingsDialogNEW.vue'
import BaseButtonGlobal from '@shared/components/controls/base/BaseButtonGlobal.vue'

import { ref } from 'vue'

export default {
  component: HeaderImageSettingsDialogNEW,
  parameters: {
    docs: {
      page: mdx
    }
  },
  args: {
    headerImage: 'image1400x900.png'
  },
  argTypes: {}
}

const Template = (args) => ({
  setup () {
    const showDialog = ref(true)

    const doSaveHeader = (val) => {
      action('save:headerTheme')(val)
    }

    return { doSaveHeader, showDialog, args }
  },
  components: { HeaderImageSettingsDialogNEW, BaseButtonGlobal },
  template: `
    <div>
      <BaseButtonGlobal
        @click="showDialog = true"
      >
        Show dialog
      </BaseButtonGlobal>

      <HeaderImageSettingsDialogNEW
        v-if="showDialog"
        v-bind="args"
        @close="showDialog = false"
        @save:headerTheme="doSaveHeader"
      />
    </div>
    `
})

export const Base = Template.bind({})
```