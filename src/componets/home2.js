import {View} from 'react-native';
import React, {Component} from 'react';
import CarouselPager from 'react-native-carousel-pager';
 
export default class Pager extends Component {
  onClickSomething() {
    this.carousel.goToPage(2);
  }
 
  render() {
    return (
      <View style={{flex: 1}}>
        <CarouselPager ref={ref => this.carousel = ref} initialPage={2} pageStyle={{backgroundColor: '#fff'}}>
          <View key={'page0'}></View>
          <View key={'page1'}></View>
        </CarouselPager>
      </View>
    );
  }
}