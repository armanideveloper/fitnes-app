import { getStorageItem } from '@/helpers/storage';

export default {
  userData: getStorageItem('userData') || null,
};
