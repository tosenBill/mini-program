import { showToast, showLoading as wxLoading } from '@tarojs/taro'

export const showFailToast = (title = '失败' ) => {
    showToast({
        title,
        icon: 'error',
        duration: 2000
      })
}
export const showLoading = (title = '加载中',complete = () => {}) => {
    wxLoading({
        title,
        mask: true,
        complete
    })
}
