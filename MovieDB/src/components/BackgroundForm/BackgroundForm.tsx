import React, {Component} from 'react';
import {View, Text, ImageBackground, ViewStyle} from 'react-native';
import styles from './styles';

export interface BackgroundFormProps {
  headerProps: {title: string};
  prepearComponent?: JSX.Element;
  styleHeight?: ViewStyle;
}

const backgroundImage = require('../../../image/background.jpeg');

class BackgroundForm extends Component<BackgroundFormProps> {
  render() {
    return (
      <ImageBackground
        source={backgroundImage}
        style={styles.backgroundImageStyle}>
        <View style={styles.viewTextStyle}>
          <Text style={styles.textStyle}>{this.props.headerProps.title}</Text>
        </View>
        {this.props.prepearComponent}
        <View style={[styles.viewStyle, this.props.styleHeight]}>
          {this.props.children}
        </View>
      </ImageBackground>
    );
  }
}

export default BackgroundForm;
