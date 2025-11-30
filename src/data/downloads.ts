export type ProductKey = 'aisql';

export interface DownloadEntry {
  url: string;
  filename?: string;
  code?: string;
}

export const downloads: Record<ProductKey, DownloadEntry> = {
  aisql: {
    url: 'https://pan.baidu.com/s/10UjDru5SS6grl8kRwZ4Pdw?pwd=8wh9',
    filename: 'yingxue-aisql-v1.0.0.zip',
    code: '8wh9',
  },
};
