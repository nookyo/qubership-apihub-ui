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

export const CheckboxIcon: FC = memo(() => {
    return (
      <div style={{ display: 'flex' }}>
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g opacity="0.5">
            <rect x="0.5" y="0.500977" width="15" height="15" rx="3.5" fill="white"/>
            <rect x="0.5" y="0.500977" width="15" height="15" rx="3.5" stroke="#B4BFCF"/>
          </g>
        </svg>
      </div>
    )
  },
)
