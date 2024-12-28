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

import type { FC } from 'react'
import { memo } from 'react'
import { Card, ListItemButton } from '@mui/material'
import { DEFAULT_PAPER_SHADOW } from '../themes/palette'
import { KeyboardDoubleArrowLeftIcon } from '../icons/KeyboardDoubleArrowLeftIcon'

export type CollapsedPanelProps = {
  onExpand: () => void
}

// First Order Component //
export const CollapsedPanel: FC<CollapsedPanelProps> = memo(props => {
  const {
    onExpand,
  } = props

  return (
    <>
      <Card sx={{
        width: '52px',
        height: '68px',
        boxShadow: DEFAULT_PAPER_SHADOW,
          borderRadius: '10px 0 0 10px',
        }}>
          <ListItemButton
            onClick={onExpand}
            sx={{
              height: '100%',
              justifyContent: 'center',
            }}
            data-testid="ExpandPanelButton"
          >
            <KeyboardDoubleArrowLeftIcon size={11}/>
          </ListItemButton>
        </Card>
      </>
    )
  },
)
