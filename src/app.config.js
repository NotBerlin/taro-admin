export default {
  pages: [
    'pages/home/home',
    'pages/userInfo/userInfo',
    // 'pages/hot/hot',
    // 'pages/node_detail/node_detail',
    // 'pages/thread_detail/thread_detail'
  ],
  tabBar: {
    list: [{
      'iconPath': 'resource/home.png',
      'selectedIconPath': 'resource/home_active.png',
      pagePath: 'pages/home/home',
      text: '最新'
    },
    {
      'iconPath': 'resource/userInfo.png',
      'selectedIconPath': 'resource/userInfo_active.png',
      pagePath: 'pages/userInfo/userInfo',
      text: '个人'
    },
      //  {
      //   'iconPath': 'resource/node.png',
      //   'selectedIconPath': 'resource/node_on.png',
      //   pagePath: 'pages/nodes/nodes',
      //   text: '节点'
      // }
    ],
    'color': '#000',
    'selectedColor': '#56abe4',
    'backgroundColor': '#fff',
    'borderStyle': 'white'
  },
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'V2EX',
    navigationBarTextStyle: 'black'
  }
}
