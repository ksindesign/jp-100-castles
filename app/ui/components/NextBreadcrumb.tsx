'use client';

import React, { ReactNode } from 'react';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

type TBreadCrumbProps = {
  homeElement: ReactNode;
  separator: ReactNode;
  containerClasses?: string;
  listClasses?: string;
  activeClasses?: string;
  capitalizeLinks?: boolean;
  customLabels?: Record<string, string> | null; // Map of path segments to custom labels
};
// Translate region and prefecture names from English to Chinese
export const translatedNames: Record<string, string> = {
  // Regions
  kanto: '關東',
  chubu: '中部',
  kyushu: '九州',
  hokkaido: '北海道',
  kinki: '近畿',
  shikoku: '四國',
  chugoku: '中國',
  tohoku: '東北',
  areas: '地區',

  // Kanto Prefectures
  tokyo: '東京',
  saitama: '埼玉',
  gunma: '群馬',
  tochigi: '栃木',
  chiba: '千葉',
  ibaragi: '茨城',
  kanagawa: '神奈川',

  // Tohoku Prefectures
  iwate: '岩手',
  miyagi: '宮城',
  fukushima: '福島',
  akita: '秋田',
  aomori: '青森',

  // Chubu Prefectures
  nagano: '長野',
  niigata: '新潟',
  toyama: '富山',
  ishikawa: '石川',
  fukui: '福井',
  gifu: '岐阜',
  aichi: '愛知',
  shizuoka: '静岡',
  yamanashi: '山梨',

  // Kinki Prefectures
  kyoto: '京都',
  osaka: '大阪',
  nara: '奈良',
  wakayama: '和歌山',
  shiga: '滋賀',
  hyogo: '兵庫',
  mie: '三重',

  // Shikoku Prefectures
  ehime: '愛媛',
  tokushima: '徳島',
  kagawa: '香川',
  kouchi: '高知',

  // Chugoku Prefectures
  totori: '鳥取',
  shimane: '島根',
  okayama: '岡山',
  hiroshima: '廣島',
  yamaguchi: '山口',

  // Kyushu Prefectures
  fukuoka: '福岡',
  kumamoto: '熊本',
  nagasaki: '長崎',
  oita: '大分',
  miyazaki: '宮崎',
  saga: '佐賀',
  kagoshima: '鹿児島',
  okinawa: '沖縄',
};

export default function NextBreadcrumb({
  homeElement,
  separator,
  containerClasses,
  listClasses,
  activeClasses,
  capitalizeLinks,
  customLabels,
}: TBreadCrumbProps) {
  const paths = usePathname();
  const pathNames = paths.split('/').filter((path) => path);

  return (
    <div>
      <ul className={`${containerClasses} list-none breadcrumb w-full`}>
        <li className={`${listClasses}`}>
          <Link href={'/'}>{homeElement || '主頁'}</Link>
        </li>
        {pathNames.length > 0 && separator}
        {pathNames.map((link, index) => {
          const href = `/${pathNames.slice(0, index + 1).join('/')}`;
          const itemClasses =
            paths === href ? `${listClasses} ${activeClasses}` : listClasses;

          // Check if there's a custom label for this path segment
          let itemLink = customLabels?.[link] || link;

          // Apply capitalization if no custom label is provided
          if (!customLabels?.[link] && capitalizeLinks) {
            itemLink = link[0].toUpperCase() + link.slice(1, link.length);
          }

          // Default translations for common paths
          if (
            itemLink === 'Destinations' ||
            itemLink === 'destinations' ||
            itemLink === 'Areas'
          ) {
            itemLink = '景點一覽';
          }

          if (itemLink === 'page' || itemLink === 'Page') {
            return null;
          }

          const translations = translatedNames;

          // Check if translation exists (case-insensitive)
          const translationKey = itemLink.toLowerCase();
          if (translations[translationKey]) {
            itemLink = translations[translationKey];
          }

          return (
            <React.Fragment key={index}>
              <li className={itemClasses}>
                <Link href={href}>{itemLink}</Link>
              </li>
              {pathNames.length !== index + 1 && separator}
            </React.Fragment>
          );
        })}
      </ul>
    </div>
  );
}
