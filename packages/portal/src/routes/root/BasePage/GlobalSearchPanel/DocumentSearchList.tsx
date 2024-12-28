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
import { memo, useRef } from 'react'
import { Box, Typography } from '@mui/material'
import { ResultCommonHeader } from './ResultCommonHeader'
import { CONTENT_WIDTH } from './GlobalSearchPanel'
import { RateResults } from './RateResults'
import { Marker } from 'react-mark.js'
import type { FetchNextSearchResultList } from './global-search'
import { getDocumentPath } from '../../../NavigationProvider'
import type { DocumentSearchResult } from '@apihub/entities/global-search'
import { useIntersectionObserver } from '@netcracker/qubership-apihub-ui-shared/hooks/common/useIntersectionObserver'
import { getSplittedVersionKey } from '@netcracker/qubership-apihub-ui-shared/utils/versions'
import { LoadingIndicator } from '@netcracker/qubership-apihub-ui-shared/components/LoadingIndicator'
import { FormattedDate } from '@netcracker/qubership-apihub-ui-shared/components/FormattedDate'

export type DocumentSearchListProps = {
  value: DocumentSearchResult[]
  searchText: string
  fetchNextPage?: FetchNextSearchResultList
  isNextPageFetching?: boolean
  hasNextPage?: boolean
}

export const DocumentSearchList: FC<DocumentSearchListProps> = memo<DocumentSearchListProps>((
  { value, searchText, isNextPageFetching, hasNextPage, fetchNextPage },
) => {
  const ref = useRef<HTMLDivElement>(null)
  useIntersectionObserver(ref, isNextPageFetching, hasNextPage, fetchNextPage)

  return (
    <Box width={CONTENT_WIDTH} position="relative">
      {value.map(
        ({
          packageKey,
          name,
          parentPackages,
          labels,
          version,
          slug,
          type,
          title,
          status,
          content,
          createdAt,
        }) => {
          const { versionKey } = getSplittedVersionKey(version)
          return (
            <Box mb={2} data-testid="SearchResultRow">
              <ResultCommonHeader
                url={getDocumentPath({ packageKey: packageKey, versionKey: versionKey, documentKey: slug })}
                icon={type}
                breadCrumbsStatus={status}
                title={title}
                parents={[...parentPackages, name, versionKey]}
                searchText={searchText}
              />
              <Marker mark={searchText}>
                <Box display="flex" gap={1} alignItems="center">
                  <Typography variant="body2">Publication date</Typography>
                  <Typography variant="subtitle2" data-testid="PublicationDateValue">
                    <FormattedDate value={createdAt}/>
                  </Typography>
                </Box>

                <RateResults searchText={searchText} labels={labels}/>
                <Typography noWrap variant="body2" data-testid="DocumentContent">
                  {content ?? 'No content'}
                </Typography>
              </Marker>
            </Box>
          )
        })}

      {hasNextPage && (
        <Box
          ref={ref}
          height="100px"
        >
          <LoadingIndicator/>
        </Box>
      )}
    </Box>
  )
})
