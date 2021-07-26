export interface CheckFilters {
  label: string;
  param: string;
  value: boolean;
}

export const DATE_POSTED: Array<CheckFilters> = [
  { label: 'last hour', param: 'last_hour', value: false },
  { label: 'last 24 hours', param: 'last_24_hours', value: false },
  { label: 'last 7 days', param: 'last_7_days', value: false },
  { label: 'last 14 days', param: 'last_14_days', value: false },
  { label: 'last 30 days', param: 'last_30_days', value: false },
  { label: 'all', param: 'all', value: false },
];

export const JOB_TYPE: Array<CheckFilters> = [
  { label: 'freelance', param: 'freelance', value: false },
  { label: 'full-time', param: 'full-time', value: false },
  { label: 'part-time', param: 'part-time', value: false },
];

export const SECTOR: Array<CheckFilters> = [];

export const loadSectorsInChecks = (sectors: Array<any>) => sectors.forEach(
  sector => SECTOR.push({ label: sector, param: sector, value: false }),
);
