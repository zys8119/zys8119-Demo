import { createDiscreteApi } from 'naive-ui';
import dialogAlertTitle from './dialogAlertTitle.vue';
const { dialog } = createDiscreteApi(['dialog']);
type DialogConfigType = {
    content: any;
    title: any;
    props?: Record<string, any>;
    width?: string | undefined;
};
export default (config: DialogConfigType = {} as DialogConfigType) => {
    return dialog.create({
        title: config.title
            ? () =>
                  h(dialogAlertTitle, {
                      title: config.title,
                  })
            : undefined,
        class: 'alert-dialog-custom-theme',
        style: `width:${config.width || 'auto'}`,
        showIcon: false,
        content: () =>
            typeof config.content === 'object'
                ? h(
                      defineAsyncComponent({
                          loader: () => config.content,
                      }),
                      config.props
                  )
                : config.content,
    } as any);
};
