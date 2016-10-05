import React, { Component, PropTypes } from 'react';
import { TouchableOpacity, View, Text } from 'react-native';
import Icon from 'react-native-vector-icons/EvilIcons';
import { showImagePicker } from 'react-native-image-picker';
import imageSelector from '../styles/image-selector';

export default class ImageSelector extends Component {
  constructor(props) {
    super(props);
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    if (this.props.uploading) {
      return;
    }

    const options = {
      title: 'Select Image',
      noData: true,
      mediaType: 'photo',
    };

    if (this.props.value) {
      options.customButtons = [
        {
          name: 'image',
          title: 'Remove Image',
        },
      ];
    }

    showImagePicker(options, res => {
      // console.info('Selected Image', res);
      if (res.didCancel) {
        console.info('User canceled image selection.');
      } else if (res.error) {
        this.props.onError(res.error);
      } else if (res.customButton) {
        this.props.onReset();
      } else {
        this.props.onSelect(res);
      }
    });
  }

  render() {
    let cameraIcon = null;

    if (!this.props.value && !this.props.uploading) {
      cameraIcon = (
        <Icon
          style={imageSelector.icon}
          name="camera"
        />
      );
    }

    let value = typeof this.props.value === 'string' ? `${this.props.value.substr(-16)}` : '';

    if (this.props.uploading) {
      value = 'Uploading...';
    }

    return (
      <TouchableOpacity
        onPress={this.onClick}
        style={imageSelector.body}
      >
        <View style={imageSelector.inner}>
          <Text style={imageSelector.label}>
            Photo
          </Text>
          <Text style={imageSelector.value}>{value}</Text>
          {cameraIcon}
        </View>
      </TouchableOpacity>
    );
  }
}

ImageSelector.propTypes = {
  value: PropTypes.string,
  uploading: PropTypes.bool,
  onError: PropTypes.func.isRequired,
  onReset: PropTypes.func.isRequired,
  onSelect: PropTypes.func.isRequired,
};
