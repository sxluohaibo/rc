/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View
} from 'react-native';

import TabNavigator from 'react-native-tab-navigator';

export default class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      selectedTab:'电影'
    }
  }

  render() {
    return (
      <View style={styles.container} >
         <TabNavigator>

           <TabNavigator.Item
             selected={this.state.selectedTab === '电影'}
             title="电影" titleStyle={styles.tabText}
             selectedTitleStyle={styles.selectedTabText}
             renderIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
             renderSelectedIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
             onPress={() => this.setState({ selectedTab: '电影' })}>
             {/* <MoviePage/> // 这里放入页面组件  */}
           </TabNavigator.Item>

           <TabNavigator.Item
             selected={this.state.selectedTab === '音乐'}
             title="音乐"
             titleStyle={styles.tabText}
             selectedTitleStyle={styles.selectedTabText}
             renderIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
             renderSelectedIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
             onPress={() => this.setState({ selectedTab: '音乐' })}>
             {/* <MusicPage />  */}
           </TabNavigator.Item>

           <TabNavigator.Item
              selected={this.state.selectedTab === '图书'}
              title="图书" titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
              renderSelectedIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
              onPress={() => this.setState({ selectedTab: '图书' })}>
              {/* <BookPage /> */}
             </TabNavigator.Item>

            <TabNavigator.Item
              selected={this.state.selectedTab === '我的'}
              title="我的" titleStyle={styles.tabText}
              selectedTitleStyle={styles.selectedTabText}
              renderIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
              renderSelectedIcon={() => <Image style={styles.icon} source={require("./res/image/ic_trending.png")} />}
              onPress={() => this.setState({ selectedTab: '我的' })}>
              {/* <MyPage /> */}
             </TabNavigator.Item>
          </TabNavigator>
        </View>
    );
  }
}

const styles = StyleSheet.create(
  { container:{ flex:1, backgroundColor:'#fff' },
    tabText:{ color:'#000000', fontSize:10 },
    selectedTabText:{ color:'#D81E06' },
    icon:{ width:20, height:20 }
  })
