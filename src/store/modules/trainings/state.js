import { getStorageItem } from '@/helpers/storage';

export default {
  classes: getStorageItem('trainingsClasses') || null,
  personalTrainings: getStorageItem('personalTrainings') || null,
};
