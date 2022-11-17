import { getStorageItem } from '@/helpers/storage';

export default {
  statsData: getStorageItem('statsData') || null,
};
