export interface CheckFilters {
    label: string;
    value: boolean;
}

export const DATE_POSTED: Array<CheckFilters> = [
    { label: 'last hour', value: false },
    { label: 'last 24 hours', value: false },
    { label: 'last 7 days', value: false },
    { label: 'last 14 days', value: false },
    { label: 'last 30 days', value: false },
    { label: 'all', value: false },
  ];

export const JOB_TYPE: Array<CheckFilters> = [
    { label: 'freelance', value: false },
    { label: 'full-time', value: false },
    { label: 'part-time', value: false },
  ];

export const SECTOR: Array<CheckFilters> = [
    { label: 'accounting', value: false },
    { label: 'automotive', value: false },
    { label: 'business services', value: false },
    { label: 'construction', value: false },
    { label: 'education', value: false },
    { label: 'facilities', value: false },
  ];
