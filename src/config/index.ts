import { ref } from 'vue';
import config from '@/config/config.json';
import { ConfigFieldI, ConfigUII } from '@/types';

export const configFields: ConfigFieldI = { ...config.fields };
export const configUI = ref<ConfigUII>({ ...config.ui });
