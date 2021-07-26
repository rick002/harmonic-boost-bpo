import * as moment from 'moment';

export interface CheckFilters {
  label: string;
  param: string;
  value: boolean;
}

export const DATE_POSTED: Array<CheckFilters> = [
  { label: 'last 24 hours', param: 'last_24_hours', value: false },
  { label: 'last 7 days', param: 'last_7_days', value: false },
  { label: 'last 14 days', param: 'last_14_days', value: false },
  { label: 'last 30 days', param: 'last_30_days', value: false },
];

export const JOB_TYPE: Array<CheckFilters> = [
  { label: 'freelance', param: 'freelance', value: false },
  { label: 'full-time', param: 'full-time', value: false },
  { label: 'part-time', param: 'part-time', value: false },
];

export const SECTOR: Array<CheckFilters> = [];

export const loadSectorsInChecks = (sectors: Array<any>): Array<CheckFilters> => {
  const loadedSectors: Array<CheckFilters> = [];
  sectors.forEach(
    sector => loadedSectors.push({ label: sector, param: sector, value: false }),
  );
  return loadedSectors;
}


export const parsePosted = (selectedPosted: CheckFilters): string => {
  switch(selectedPosted.param) {
    case 'last_24_hours': 
      return moment().subtract(1, 'day').format('YYYY-MM-DD');
    case 'last_7_days': 
      return  moment().subtract(6, 'days').format('YYYY-MM-DD');
    case 'last_14_days':
      return moment().subtract(14, 'days').format('YYYY-MM-DD');
    case 'last_30_days':
      return moment().subtract(30, 'days').format('YYYY-MM-DD');
    default: return '';
  }
}