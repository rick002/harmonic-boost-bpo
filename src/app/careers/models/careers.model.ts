export interface CareersFilter {
  searchTitle: string;
  location: string;
  sectorCat: string;
  ajaxFilter: string;
  posted: string;
  jobType: string;
  sortBy: string;
}

export const DEFAULT_FILTERS: CareersFilter = {
  searchTitle: '',
  location: '',
  sectorCat: 'business services',
  ajaxFilter: '',
  posted: '',
  jobType: 'full-time',
  sortBy: '',
}
