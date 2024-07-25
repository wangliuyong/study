/***
 * @file:
 * @Date: 2021-07-07 09:14:14
 * @author: liuyong.wang
 */
declare module "*.css" {
  const classes: { [ket: string]: String };
}

declare module "*.vue" {
  import { ComponentOptions, defineComponent, FunctionalComponent } from "vue";
  const component:
    | ComponentOptions
    | ReturnType<typeof defineComponent>
    | FunctionalComponent;
  export default component;
}

declare module "vue/types/vue" {
  // 3. 声明为 Vue 补充的东西
  interface Vue {
    $route: any;
    $XModal: any;
  }
}

declare module "virtual:pwa-register/vue" {
  import type { Ref } from "vue";

  export interface RegisterSWOptions {
    immediate?: boolean;
    onNeedRefresh?: () => void;
    onOfflineReady?: () => void;
    onRegistered?: (
      registration: ServiceWorkerRegistration | undefined
    ) => void;
    onRegisterError?: (error: any) => void;
  }

  export function useRegisterSW(options?: RegisterSWOptions): {
    needRefresh: Ref<boolean>;
    offlineReady: Ref<boolean>;
    updateServiceWorker: (reloadPage?: boolean) => Promise<void>;
  };
}
