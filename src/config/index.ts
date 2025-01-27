import { ref } from 'vue';
import config from '@/config/config.json';
import { ConfigFieldI, ConfigUII, SelectConfigItemI } from '@/types';

export const configFields: ConfigFieldI = { ...config.fields };
export const configUI = ref<ConfigUII>({ ...config.ui });
export const selectConfigOptions: SelectConfigItemI[] = [ ...config.selectConfig ];
