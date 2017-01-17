# ReactNative
ReactNative  self-study
ReactNative学习过程
根据中文版React Native 官网http://reactnative.cn/docs/0.40/getting-started.html#content 学习，目前只看了一些入门基础的东西，进阶的好多地方都不懂。把之前学习的时候按照官网上面的例子敲下来，方便以后做记录。由于我的电脑Xcode版本是V 7.2.1  mac系统版本是OS X EI Capitan 10.11.3  所以装React Native （0.40版本） 创建项目的时候会报错。里面大部分例子都可以运行，网络那部分例子运行不了。另外这只是我个人的学习过程，期待将来某一天可以真正用reactNative做混合开发。
报错的文件：
RCTPlatform.m
RCTTabBarItem.m
- (void)setBadgeColor:(UIColor *)bagdeColor 方法
RCTTabBar.m
- (void)setUnselectedItemTintColor:(UIColor *)unselectedItemTintColor 方法 
这三处地方我都注释掉了，注释掉就没事了
看到的朋友如果需要这三个方法记得打开。
