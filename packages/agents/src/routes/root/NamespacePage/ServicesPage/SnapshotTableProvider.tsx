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

import type { Dispatch, FC, PropsWithChildren, SetStateAction } from 'react'
import { createContext, memo, useContext, useState } from 'react'

// TODO: `SnapshotTableProvider` is redundant and should be removed.
//  Need to calculate selectable depends on step statuses
export const SnapshotTableProvider: FC<PropsWithChildren> = memo<PropsWithChildren>(({ children }) => {
  const [selectable, setSelectable] = useState<boolean>(true)

  return (
    <SnapshotTableSelectableContext.Provider value={selectable}>
      <SetSnapshotTableSelectableContext.Provider value={setSelectable}>
        {children}
      </SetSnapshotTableSelectableContext.Provider>
    </SnapshotTableSelectableContext.Provider>
  )
})

const SnapshotTableSelectableContext = createContext<boolean>()
const SetSnapshotTableSelectableContext = createContext<Dispatch<SetStateAction<boolean>>>()

export function useSnapshotTableSelectable(): boolean {
  return useContext(SnapshotTableSelectableContext)
}

export function useSetSnapshotTableSelectable(): Dispatch<SetStateAction<boolean>> {
  return useContext(SetSnapshotTableSelectableContext)
}
