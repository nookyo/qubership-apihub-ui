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
import { ConfigureDashboardToolbar } from './ConfigureDashboardToolbar'
import { AddPackageDialog } from './AddPackageDialog'
import { usePackage } from '../../usePackage'
import { PublishPackageVersionDialog } from './PublishPackageVersionDialog'
import { DashboardReferencesContextProvider } from './DashboardReferencesProvider'
import { CONFIGURATION_PAGE } from '../../../../routes'
import { NoPackageVersionPlaceholder } from '../../NoPackageVersionPlaceholder'
import { ConfigureDashboardSubPage } from './ConfigureDashboardSubPage'
import { VersionNavigationMenu } from '../VersionNavigationMenu'
import { RecursiveDashboardNameContextProvider } from './RecursiveDashboardNameContextProvider'
import { PageLayout } from '@netcracker/qubership-apihub-ui-shared/components/PageLayout'

export const ConfigureDashboardPage: FC = memo(() => {
  const [packageObject] = usePackage({ showParents: true })

  return (
    <DashboardReferencesContextProvider>
      <RecursiveDashboardNameContextProvider>
        <NoPackageVersionPlaceholder packageObject={packageObject}>
          <PageLayout
            toolbar={<ConfigureDashboardToolbar packageObject={packageObject}/>}
            menu={<VersionNavigationMenu menuItems={CONFIGURE_DASHBOARD_PAGE_MENU_ITEMS}/>}
            body={<ConfigureDashboardSubPage/>}
          />
        </NoPackageVersionPlaceholder>
        <AddPackageDialog packageObject={packageObject}/>
        <PublishPackageVersionDialog/>
      </RecursiveDashboardNameContextProvider>
    </DashboardReferencesContextProvider>
  )
})

const CONFIGURE_DASHBOARD_PAGE_MENU_ITEMS = [
  CONFIGURATION_PAGE,
]
