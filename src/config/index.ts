import data from '@/config/config.json';
import { ConfigI } from '@/types';

export const config: ConfigI[] = [ ...data.config ];
