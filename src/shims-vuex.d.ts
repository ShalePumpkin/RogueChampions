import {Store} from '@/store/index';

declare module '@vue/runtime-core' {
	interface ComponentCustomProperties {
		$store: Store;
	}
}
