import { getStorageItem } from '@/helpers/storage';

export default {
  memberships: [],
  packages: [],
  planForBuying: getStorageItem('plan-for-buying') || null,
};
