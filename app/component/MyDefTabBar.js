const React = require('react');
const ReactNative = require('react-native');

import PropTypes from 'prop-types'; // ES6

const {
  StyleSheet,
  Text,
  View,
  Animated,
  TouchableOpacity
} = ReactNative;

export default class MyDefTabBar extends React.Component {
  static propTypes = {
    activeTab: PropTypes.number,
    tabs: PropTypes.array,
    backgroundColor: PropTypes.string,
    activeTextColor: PropTypes.string,
    inactiveTextColor: PropTypes.string,
    textStyle: Text.propTypes.style,
    tabStyle: View.propTypes.style,
    renderTab: PropTypes.func,
    underlineStyle: View.propTypes.style,
  }

    constructor(props){
        super(props)
        this.state = {
            scrollY: new Animated.Value(0)
        }
    }

  renderTab(name, page, isTabActive, onPressHandler) {
    const textColor = '#0398ff';
    const fontWeight = isTabActive ? 'bold' : 'normal';

    return <TouchableOpacity
      style={{flex: 1, }}
      key={name}
      accessible={true}
      accessibilityLabel={name}
      accessibilityTraits='button'
      onPress={() => onPressHandler(page)}
    >
      <View style={[styles.tab ]}>
        <Text style={[{color: textColor, fontWeight, fontSize: 13 }, ]}>
          {name}
        </Text>
      </View>
    </TouchableOpacity>;
  }

  render() {
    const containerWidth = this.props.containerWidth;
    const numberOfTabs = this.props.tabs.length;
    const tabUnderlineStyle = {
      position: 'absolute',
      width: containerWidth / numberOfTabs,
      bottom: 6,
      justifyContent: "center",
      alignItems: "center"
    };

    const left = this.props.scrollValue.interpolate({
      inputRange: [0, 1, ], outputRange: [0,  containerWidth / numberOfTabs, ],
    });
    return (
      <View style={[styles.tabs, {backgroundColor: this.props.backgroundColor, }, this.props.style, ]}>
        {this.props.tabs.map((name, page) => {
          const isTabActive = this.props.activeTab === page;
          const renderTab = this.props.renderTab || this.renderTab;
          return renderTab(name, page, isTabActive, this.props.goToPage);
        })}
        <Animated.View >
          <View style={{height: 2, width: 35, backgroundColor: '#0398ff',}}></View>
        </Animated.View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  tabs: {
    height: 36,
    flexDirection: 'row',
    justifyContent: 'space-around'
  },
});

module.exports = MyDefTabBar;
