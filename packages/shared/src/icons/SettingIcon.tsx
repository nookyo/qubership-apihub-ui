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

export type SettingIconProps = {
  color?: string
}

export const SettingIcon: FC<SettingIconProps> = memo<SettingIconProps>(({ color }) => {
  return (
    <div style={{ display: 'flex' }}>
      <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M10.5934 2.00071C11.5825 2.0315 12.2257 2.57571 12.5649 3.60161L12.6186 3.77704L12.6601 3.93411C12.6753 3.9946 12.6941 4.05901 12.7162 4.1259L12.7631 4.2564L12.791 4.27033L12.8475 4.25165L12.9569 4.20974L13.0845 4.15419C14.2423 3.61519 15.133 3.71522 15.8582 4.51221L15.9607 4.63081L16.6324 5.46324C17.2309 6.25131 17.2128 7.09365 16.6289 8.00283L16.5264 8.15498L16.4305 8.28612C16.3922 8.33701 16.3532 8.39343 16.3143 8.45405L16.2562 8.54799L16.2288 8.595L16.232 8.61137L16.3071 8.6609L16.4107 8.72348L16.5363 8.79172C17.6739 9.37224 18.1434 10.1357 17.9622 11.1962L17.9319 11.3497L17.732 12.2163C17.6026 12.7771 17.5009 13.0426 17.1008 13.4069C16.7122 13.7608 16.2688 13.9069 15.6828 13.9554L15.5027 13.9671L15.3403 13.9722C15.2773 13.9734 15.2096 13.9773 15.1387 13.9839L14.9906 14.0014L15.0013 14.1181L15.0123 14.1965L15.0387 14.3429C15.3034 15.5923 15.0056 16.4376 14.0659 16.9649L13.9273 17.0381L12.9651 17.5053C12.0626 17.9113 11.2459 17.7041 10.4914 16.9307L10.3662 16.7966L10.26 16.6736C10.2186 16.6243 10.1719 16.5731 10.121 16.5211L10.0416 16.4426L10.0009 16.405L9.92587 16.4764L9.83988 16.5648L9.74352 16.6736C8.96352 17.602 8.14028 17.9352 7.14247 17.5471L6.99872 17.4868L6.13771 17.0683L5.88194 16.9374C5.49209 16.7245 5.27332 16.5206 5.05953 16.0692C4.83446 15.5939 4.81934 15.1271 4.92845 14.527L4.96482 14.3429C4.97785 14.2814 4.98924 14.2147 4.99876 14.1443L5.01376 14.0039L5.01049 14.0006L4.92559 13.9893L4.80562 13.9785L4.66322 13.9722C3.3863 13.9491 2.62965 13.4688 2.32718 12.4346L2.28705 12.283L2.04827 11.2404C1.85576 10.2697 2.24133 9.52056 3.16465 8.95934L3.32351 8.86754L3.4672 8.79172C3.52352 8.76298 3.58287 8.72965 3.64392 8.69251L3.77065 8.60974L3.77393 8.59418L3.72271 8.50583L3.65653 8.40332L3.57302 8.28612C2.80507 7.26567 2.71774 6.3737 3.34652 5.4986L3.44122 5.37368L4.11581 4.54362C4.76222 3.7943 5.58993 3.63691 6.60062 4.01898L6.77077 4.08764L6.91898 4.15419C6.97474 4.18015 7.03576 4.20572 7.10069 4.23037L7.21172 4.26951L7.2412 4.25559L7.26874 4.18299L7.30566 4.07003L7.34335 3.93411C7.63744 2.75777 8.23127 2.09735 9.30002 2.00876L9.45595 2L10.5934 2.00071ZM10.5476 3.47404H9.45595L9.34179 3.4824C9.10753 3.51291 8.95451 3.63935 8.80729 4.16347L8.77338 4.29162L8.72714 4.46012C8.64119 4.7488 8.51126 5.07365 8.34394 5.38904C8.01267 5.50775 7.69785 5.66103 7.40435 5.84608C7.059 5.77607 6.7297 5.67338 6.4549 5.5598L6.16828 5.43293C5.96444 5.34562 5.81177 5.30108 5.69079 5.29024L5.62184 5.28771C5.47639 5.29075 5.38036 5.35049 5.28758 5.44543L5.23194 5.50646L4.58571 6.30263L4.50815 6.4053C4.35796 6.62175 4.3355 6.81477 4.66773 7.28595L4.8546 7.54458C5.02813 7.79822 5.20213 8.11085 5.34421 8.44655C5.23822 8.76124 5.16323 9.09018 5.12305 9.4304C4.84964 9.66707 4.5583 9.86987 4.29296 10.0206L4.01268 10.1706C3.50751 10.4484 3.44309 10.6317 3.48319 10.8921L3.49415 10.9537L3.72368 11.9531L3.75684 12.0774C3.83494 12.329 3.97321 12.4655 4.54905 12.4938L4.86625 12.5057C5.17002 12.5248 5.51971 12.5793 5.86785 12.6727C6.05192 12.9585 6.26482 13.224 6.50345 13.4649C6.51704 13.8962 6.47717 14.3165 6.40684 14.6484C6.24216 15.4256 6.39546 15.5508 6.72089 15.7125L7.64305 16.161C7.74077 16.205 7.82809 16.2346 7.91884 16.2335L7.97381 16.2289C8.12208 16.2062 8.2862 16.0964 8.52273 15.8319L8.73384 15.5904C8.94407 15.3622 9.21259 15.12 9.51059 14.905L9.75459 14.9232L10.0018 14.9293L10.2489 14.9231L10.4931 14.9044C10.7909 15.1199 11.0594 15.3621 11.2697 15.5904L11.4808 15.8319C11.7469 16.1294 11.9213 16.2313 12.0847 16.2335L12.1388 16.2305C12.1868 16.2249 12.2345 16.2115 12.2842 16.1928L12.3604 16.161L13.2826 15.7125L13.3963 15.6523C13.6414 15.5094 13.7408 15.3285 13.5967 14.6484C13.5263 14.3165 13.4865 13.8962 13.5011 13.465C13.7387 13.224 13.9516 12.9585 14.1359 12.6713C14.4843 12.579 14.8338 12.5248 15.1374 12.5057L15.4545 12.4938C16.1189 12.4612 16.2007 12.2844 16.2798 11.9531L16.4956 11.0184C16.5698 10.6859 16.5737 10.4912 15.9908 10.1706L15.7105 10.0206C15.4452 9.86983 15.1538 9.66692 14.8806 9.42975C14.8403 9.09018 14.7653 8.76124 14.6589 8.44587C14.8013 8.11073 14.9754 7.7982 15.1489 7.54458L15.3358 7.28595C15.668 6.81477 15.6455 6.62175 15.4953 6.4053L15.4585 6.35479L14.8141 5.55715C14.6987 5.41679 14.6019 5.31631 14.4439 5.29283L14.3817 5.28771C14.2508 5.28497 14.0798 5.32816 13.8352 5.43293L13.5487 5.55975C13.2741 5.67324 12.9451 5.77571 12.6001 5.8448C12.3055 5.66088 11.99 5.5073 11.6579 5.38978C11.4986 5.08641 11.3727 4.7748 11.2869 4.49494L11.1939 4.15544C11.0368 3.60072 10.8727 3.49671 10.61 3.47721L10.5476 3.47404ZM10.0018 6.90394C11.7204 6.90394 13.1136 8.29717 13.1136 10.0158C13.1136 11.7344 11.7204 13.1277 10.0018 13.1277C8.28312 13.1277 6.88989 11.7344 6.88989 10.0158C6.88989 8.29717 8.28312 6.90394 10.0018 6.90394ZM10.0018 8.37798C9.09721 8.37798 8.36393 9.11126 8.36393 10.0158C8.36393 10.9204 9.09721 11.6536 10.0018 11.6536C10.9063 11.6536 11.6396 10.9204 11.6396 10.0158C11.6396 9.11126 10.9063 8.37798 10.0018 8.37798Z"
          fill={color ?? '#8F9EB4'}
        />
      </svg>
    </div>
  )
})
