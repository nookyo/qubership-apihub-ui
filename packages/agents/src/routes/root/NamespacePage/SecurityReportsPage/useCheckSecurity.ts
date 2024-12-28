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

import { useMutation } from '@tanstack/react-query'
import type { Key } from '@apihub/entities/keys'

import { useInvalidateSecurityReports } from './useSecurityReports'
import { useParams } from 'react-router-dom'
import { ncCustomAgentsRequestVoid } from '@apihub/utils/requests'
import { useSearchParam } from '@netcracker/qubership-apihub-ui-shared/hooks/searchparams/useSearchParam'
import { WORKSPACE_SEARCH_PARAM } from '@netcracker/qubership-apihub-ui-shared/utils/search-params'

export function useCheckSecurity(): StartSecurityCheckFunction {
  const { agentId = '', namespaceKey = '' } = useParams()
  const workspaceKey = useSearchParam(WORKSPACE_SEARCH_PARAM)

  const invalidateSecurityReports = useInvalidateSecurityReports()

  const { mutate } = useMutation<void, Error, void>({
    mutationFn: () => startSecurityCheck(agentId, namespaceKey, workspaceKey!),
    onSuccess: () => invalidateSecurityReports(),
  })

  return mutate
}

async function startSecurityCheck(
  agentKey: Key,
  nameKey: Key,
  workspaceKey: Key,
): Promise<void> {
  const agentId = encodeURIComponent(agentKey)
  const name = encodeURIComponent(nameKey)
  const workspaceId = encodeURIComponent(workspaceKey)

  await ncCustomAgentsRequestVoid('/security/authCheck', {
      method: 'POST',
      body: JSON.stringify({ agentId, name, workspaceId }),
    },
  )
}

type StartSecurityCheckFunction = () => void
