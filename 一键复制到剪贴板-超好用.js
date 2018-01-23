//引入
import copy from 'copy-to-clipboard';

//使用方法
copyUrl = () => {
    copy(this.props.url);
    message.success('复制成功，如果失败，请在输入框内手动复制.');
};