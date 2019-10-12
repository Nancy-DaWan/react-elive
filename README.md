1.首页功能
    1.创建项目结构
        Pages：页面
        Router：路由
        Components：公共组件
    2.搭建路由
    3.处理公共文件和样式
        1.创建static文件夹处理公共资源
        2.支持Less
        3.增加公共样式
    4.实现底部导航
        1.加载字体图标
            iconfont
            icomoon
    5.顶部导航
        1.REM的使用
        2.命名规则：主名称+子名称  Home_Header_Nav
    6.使用第三方UI组件Swiper
        1.安装
            npm install --save react-swipeable-views
        2.看文档：https://react-swipeable-views.com/
    7.编写服务器代码
        增加homehot1和homthot2接口
    8.前台实现接口
        1.解决跨域问题
        2.封装网络请求
        3.实现接口
        4.视图渲染
            智能组件
            木偶组件

2.配置快捷运行
    1.服务器自动更新
        1.安装依赖
            npm install -g nodemon
        2.增加nodemon的配置选项
            nodemon.json
        3.修改服务器端代码
            启动:nodemon index.js
    2.客户端服务器端同步启动
        1.安装
            npm install -g concurrently
        2.修改package.json文件，增加同时运行的配置
            "dev": "concurrently \"npm start\" \" nodemon mock/index.js \""

3.城市选择
    1.配置城市选择的路由
    2.公共Header头
        1.路由的history.push方法
        2.路由withRouter对象
        3.window.history.back()
    3.当前城市显示
    4.城市选择
    5.创建Redux实现city的存储
        1.安装
        2.创建结构
    6.组件关联Redux
    7.城市信息的切换

4.搜索功能
    1.列表数据渲染
    2.加载更多
        触底判断，节流防抖！！！
    3.再次搜索
        1.生命周期函数理解
            https://gitee.com/iwensxt/new-web-interview/blob/master/questions/React/React%E7%94%9F%E5%91%BD%E5%91%A8%E6%9C%9F%E4%B8%8E%E8%87%AA%E5%B7%B1%E7%9A%84%E7%90%86%E8%A7%A3.md
    4.搜索返回数据处理
        1.redux存储每一次搜索的内容
        2.将redux写入到SearchInput中
    5.面试题：https://gitee.com/iwensxt/new-web-interview


5.内存泄漏问题
    1.组件销毁后，不能在给state赋值，否则会造成内存泄漏
        componentWillUnmount() {
            // 卸载异步操作设置状态
            this.setState = (state, callback) => {
                return;
            }
        }
    2.使用定时器的时候，组件销毁之后，定时器也要清除，否则造成内存泄漏
        componentWillUnmount(){
            // 清除定时器
            clearTimeout(this.state.timer);
        }
    3.使用事件(滚动等事件，可持续的事件)的时候，组件销毁后，要清除事件，否则造成内存泄漏
        清除事件
    4.参考地址：https://juejin.im/post/5ca48a136fb9a05e6c77bd9a



假期作业：
    链接：https://pan.baidu.com/s/16gWbf7PpbsiwXtYtmNLrFA    提取码：buxi 