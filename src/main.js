import {
	createSSRApp
} from "vue";
// 引入 uView UI
import uView from '@/uni_modules//vk-uview-ui';
import App from "./App.vue";
export function createApp() {
	const app = createSSRApp(App);
  console.log('uView', uView)
  app.use(uView)
	return {
		app,
	};
}
