import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Modal, Text, TouchableWithoutFeedback, Animated, Dimensions } from 'react-native';
import theme from '../../theme';


const propTypes = {
    visible: PropTypes.bool,
    title: PropTypes.string,
    selectedItem: PropTypes.string,
    defs: PropTypes.arrayOf(PropTypes.shape({
        label: PropTypes.string,
        value: PropTypes.string
    })),
    onClose: PropTypes.func,
    onChange: PropTypes.func
};

const styles = theme.UI.ActionSheet;

class CustomActionSheet extends Component {
    state = {
        animatedOpacity: new Animated.Value(0),
        animatedBottom: new Animated.Value(-(Dimensions.get('window').height / 2)),
        delayedVisible: false
    };

    componentDidUpdate(prevProps) {
        if(prevProps.visible !== this.props.visible) {
            Animated.timing(this.state.animatedOpacity, {
                toValue: this.props.visible ? 1 : 0,
                duration: 200
            }).start();

            Animated.timing(this.state.animatedBottom, {
                toValue: this.props.visible ? 0 : -(Dimensions.get('window').height / 2),
                duration: 200
            }).start();

            setTimeout(() => this.setState({delayedVisible: this.props.visible}), this.props.visible ? 0 : 200);
        }
    }

    render() {
        let { animatedOpacity, animatedBottom, delayedVisible } = this.state;
        let { title, selectedItem, defs, onClose, onChange } = this.props;

        return (
            <Modal
                visible={delayedVisible}
                transparent
                onRequestClose={() => {}}
            >
                <View style={styles.outerWrapper}>
                    <TouchableWithoutFeedback onPress={onClose}>
                        <Animated.View style={[styles.modalBackground, {opacity: animatedOpacity}]}></Animated.View>
                    </TouchableWithoutFeedback>
                    <Animated.View style={[styles.innerWrapper, {bottom: animatedBottom}]}>
                        <View style={styles.content}>
                            <Text style={styles.title}>{title}</Text>
                            {selectedItem &&
                                <TouchableWithoutFeedback onPress={onClose}>
                                    <Text style={[styles.item, styles.item_selected]}>{(defs.find(def => def.value === selectedItem) || {label: ''}).label}</Text>
                                </TouchableWithoutFeedback>
                            }
                            {defs
                                .filter(def => def.value !== selectedItem)
                                .map((def, i) =>
                                    <TouchableWithoutFeedback
                                        onPress={() => {
                                            onChange(def.value);
                                            onClose();
                                        }}
                                        key={i}
                                    >
                                        <Text style={styles.item}>{def.label}</Text>
                                    </TouchableWithoutFeedback>
                                )
                            }
                        </View>
                        <View style={styles.footer}>
                            <TouchableWithoutFeedback onPress={onClose}>
                                <Text style={[styles.item, styles.item_cancel]}>Cancel</Text>
                            </TouchableWithoutFeedback>
                        </View>
                    </Animated.View>
                </View>
            </Modal>
        );
    }
}

CustomActionSheet.propTypes = propTypes;

export default CustomActionSheet;