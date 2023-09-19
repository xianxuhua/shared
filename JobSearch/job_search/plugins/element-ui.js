import Vue from 'vue'
import Element from 'element-ui'
import ElementUI from 'element-ui';
import zhLocale from 'element-ui/lib/locale/lang/zh-CN'
// Dialog滚动条隐藏，页面抖动，
ElementUI.Dialog.props.lockScroll.default = false;
ElementUI.Dialog.props.closeOnClickModal = false;
ElementUI.Dialog.props.destroyOnClose = true;
ElementUI.MessageBox.setDefaults({lockScroll: false});
Vue.use(Element, { zhLocale })
