/**
 * Copyright 2024-2025 NetCracker Technology Corporation
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import type { Meta, StoryObj } from '@storybook/react'
import type { ReactElement } from 'react'
import { useMemo } from 'react'
import { useForm } from 'react-hook-form'
import type {
  CompareRevisionsDialogFormData,
  CompareRevisionsDialogFormProps,
} from '../components/CompareRevisionsDialogForm'
import { CompareRevisionsDialogForm } from '../components/CompareRevisionsDialogForm'
import { revisions } from './samples/revisions-samples'

const meta: Meta<typeof CompareRevisionsDialogForm> = {
  component: CompareRevisionsDialogForm,
}

export default meta
type Story = StoryObj<typeof meta>

const StoryComponent = (args: CompareRevisionsDialogFormProps): ReactElement => {
  const defaultValues = useMemo(() => {
    return {
      changedRevision: null,
      originalRevision: null,
    }
  }, [])

  const { control, setValue } = useForm<CompareRevisionsDialogFormData>({ defaultValues })

  return (
    <CompareRevisionsDialogForm
      {...args}
      control={control}
      setValue={setValue}
    />
  )
}

export const DefaultStory: Story = {
  name: 'Default',
  args: {
    open: true,
    setOpen: () => null,
    onSubmit: () => null,
    onSwap: () => null,
    originalRevisions: revisions,
    changedRevisions: revisions,
    isApiTypeFetching: false,
    isRevisionsLoading: false,
  },
  render: StoryComponent,
}
