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

export const LockOpenIcon: FC = memo(() => {
  return (
    <div style={{ display: 'flex' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10 2.5C8.60319 2.5 7.50391 3.59875 7.50391 4.91387V7H12.665C13.2715 6.99999 13.7719 6.99998 14.1794 7.03328C14.6027 7.06786 14.9914 7.14206 15.3565 7.32807C15.9229 7.61665 16.3834 8.07712 16.6719 8.64349C16.8579 9.00856 16.9321 9.39732 16.9667 9.82056C17 10.2281 17 10.7285 17 11.335V13.6611C17 14.2676 17 14.768 16.9667 15.1755C16.9321 15.5988 16.8579 15.9875 16.6719 16.3526C16.3834 16.919 15.9229 17.3794 15.3565 17.668C14.9914 17.854 14.6027 17.9282 14.1794 17.9628C13.7719 17.9961 13.2715 17.9961 12.665 17.9961H7.33511C6.72861 17.9961 6.22824 17.9961 5.82069 17.9628C5.39744 17.9282 5.00868 17.854 4.64361 17.668C4.07724 17.3794 3.61677 16.919 3.32819 16.3526C3.14218 15.9875 3.06798 15.5988 3.0334 15.1755C3.0001 14.768 3.00011 14.2676 3.00012 13.6611V11.335C3.00011 10.7285 3.0001 10.2281 3.0334 9.82056C3.06798 9.39732 3.14218 9.00856 3.32819 8.64349C3.61677 8.07712 4.07724 7.61665 4.64361 7.32807C5.00868 7.14206 5.39744 7.06786 5.82069 7.03328C5.87979 7.02845 5.94085 7.02432 6.00391 7.02079V4.91387C6.00391 2.73427 7.81128 1 10 1C11.5511 1 12.9038 1.86729 13.5656 3.14524C13.7561 3.51306 13.6124 3.96565 13.2445 4.15613C12.8767 4.34661 12.4241 4.20285 12.2337 3.83504C11.8263 3.04851 10.9836 2.5 10 2.5ZM5.94283 8.5283C5.61235 8.5553 5.44297 8.60427 5.3246 8.66458C5.04047 8.80935 4.80947 9.04035 4.6647 9.32447C4.60439 9.44284 4.55542 9.61223 4.52842 9.94271C4.50071 10.2819 4.50012 10.7208 4.50012 11.366V13.6301C4.50012 14.2753 4.50071 14.7141 4.52842 15.0534C4.55542 15.3839 4.60439 15.5533 4.6647 15.6716C4.80947 15.9557 5.04047 16.1867 5.3246 16.3315C5.44297 16.3918 5.61235 16.4408 5.94283 16.4678C6.28207 16.4955 6.72089 16.4961 7.36612 16.4961H12.634C13.2792 16.4961 13.7181 16.4955 14.0573 16.4678C14.3878 16.4408 14.5572 16.3918 14.6755 16.3315C14.9597 16.1867 15.1907 15.9557 15.3354 15.6716C15.3957 15.5533 15.4447 15.3839 15.4717 15.0534C15.4994 14.7141 15.5 14.2753 15.5 13.6301V11.366C15.5 10.7208 15.4994 10.2819 15.4717 9.94271C15.4447 9.61223 15.3957 9.44284 15.3354 9.32447C15.1907 9.04035 14.9597 8.80935 14.6755 8.66458C14.5572 8.60427 14.3878 8.5553 14.0573 8.5283C13.7181 8.50058 13.2792 8.5 12.634 8.5H7.36612C6.72089 8.5 6.28207 8.50058 5.94283 8.5283Z"
          fill="#8F9EB4"
        />
      </svg>
    </div>
  )
})
