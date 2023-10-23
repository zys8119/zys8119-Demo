/*eslint-disable*/
// @ts-ignore
import dialog_import from '@/alert/dialog';

// @ts-ignore
export function getApi<
    T extends
        | {
              default: any;
          }
        | Record<any, any>,
    V = T extends {
        default: any;
    }
        ? T['default']
        : T
>(data: T): V {
    if (Object.keys(data).includes('default')) {
        return data.default;
    } else {
        return data as unknown as V;
    }
}

export const $apiData = {
    dialog: dialog_import,
};

export const dialog = dialog_import;

export default $apiData;

declare global {
    const $alert: typeof $apiData;
}
