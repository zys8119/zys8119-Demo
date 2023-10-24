import { createDiscreteApi, DialogReactive } from 'naive-ui';
import dialogAlertTitle from './dialogAlertTitle.vue';
import App from '@/app.vue';
const { dialog } = createDiscreteApi(['dialog']);
type DialogConfigType = {
    content: any;
    title: any;
    props?: Record<string, any>;
    width?: string | undefined;
};
const dialogCaches: Array<DialogReactive> = [];
interface DialogDefault {
    (config: DialogConfigType):DialogReactive
    close():void
    closeAll():void
}
const dialogDefault:DialogDefault = (config: DialogConfigType = {} as DialogConfigType) => {
    const dialogApp = dialog.create({
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
                ? h(App, [
                      h(
                          defineAsyncComponent({
                              loader: () => config.content,
                          }),
                          config.props
                      ),
                  ])
                : config.content,
    } as any);
    dialogCaches.push(dialogApp);
    return dialogApp;
};
dialogDefault.close = () => {
    const dialogPop = dialogCaches.pop();
    setTimeout(() => {
        dialogPop?.destroy();
    }, 500);
};
dialogDefault.closeAll = () => {
    while (dialogCaches.length > 0) {
        dialogDefault.close();
    }
};
export default dialogDefault;
