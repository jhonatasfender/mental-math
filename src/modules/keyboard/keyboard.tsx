import React, { Component } from 'react';
import { Image, Text, TouchableHighlight, View } from 'react-native';
import { NumberKeysInterface } from '../home/calculations-screen/interfaces';
import { KeyboardProposInterface } from './interfaces';
import styles, { BG_COLOR, keyStyle } from './styles';

const numberKeys: NumberKeysInterface[][] = [
    [
        { mainText: '1', otherText: '' },
        { mainText: '2', otherText: '' },
        { mainText: '3', otherText: '' }
    ],
    [
        { mainText: '4', otherText: '' },
        { mainText: '5', otherText: '' },
        { mainText: '6', otherText: '' }
    ],
    [
        { mainText: '7', otherText: '' },
        { mainText: '8', otherText: '' },
        { mainText: '9', otherText: '' }
    ],
    [
        { mainText: '-', otherText: '' },
        { mainText: '0', otherText: '' },
        { mainText: '.', otherText: '' }
    ]
];


export default class KeyboardCustom extends Component<KeyboardProposInterface, {}> {

    constructor(props: KeyboardProposInterface) {
        super(props);
    }

    private clearAll() {
        this.props.onClear();
    }

    private onPress(key: string) {
        if (key === '') {
            return;


        } else if (key === 'del') {
            this.props.onDelete();


        } else {
            this.props.onKeyPress(key);
        }
    }

    private renderOtherText(key: NumberKeysInterface) {
        if (this.props.disableOtherText !== true) {
            return <Text style={keyStyle.otherText}>{key.otherText}</Text>;
        }

        return null;
    }

    private disableBorder() {
        if (this.props.disableBorder !== true) {
            return keyStyle.bd;
        }

        return keyStyle.border;
    }

    private disableClearButtonBackground() {
        if (this.props.disableClearButtonBackground !== true) {
            return keyStyle.bg_d2d5dc;
        }

        return keyStyle.bgLessL;
    }

    private clearBtnUnderlayColor() {
        if (this.props.disableClearButtonBackground !== true) {
            return '#ffffff';
        }

        return '#d2d5dc';
    }

    private renderKey(key: NumberKeysInterface, index: number) {
        return (
            <TouchableHighlight
                key={index}
                underlayColor={BG_COLOR}
                style={keyStyle.wrapper}
                onPress={this.onPress.bind(this, key.mainText)}
            >
                <View style={[keyStyle.bd, this.disableBorder()]}>
                    <Text style={keyStyle.mainText}>{key.mainText}</Text>
                    {this.renderOtherText(key)}
                </View>
            </TouchableHighlight>
        );
    }

    private renderNumberKeys() {
        return numberKeys.map((group, groupIndex) => {
            return (
                <View key={groupIndex} style={styles.row}>
                    {group.map(this.renderKey.bind(this))}
                </View>
            );
        });
    }

    private isDecimalPad() {
        return this.props.keyboardType === 'decimal-pad';
    }

    private renderDotKey() {
        if (this.props.disableDot !== true) {
            let dotNode = null, dotText = '';
            if (this.isDecimalPad()) {
                dotText = '.';
                dotNode = <Text style={[keyStyle.mainText, keyStyle.dot]}>.</Text>;
            }

            return (
                <TouchableHighlight
                    underlayColor="#ffffff"
                    style={[keyStyle.wrapper, keyStyle.bg_d2d5dc]}
                    onPress={this.onPress.bind(this, dotText)}
                >
                    <View style={[keyStyle.bd, this.disableBorder()]}>{dotNode}</View>
                </TouchableHighlight>
            );
        }

        return (
            <TouchableHighlight style={keyStyle.wrapper}>
                <View />
            </TouchableHighlight>
        );
    }

    render() {
        const props = this.props;

        return (
            <View style={styles.wrapper}>
                <View style={styles.main}>

                    {this.renderNumberKeys()}

                    <View style={styles.row}>
                        {this.renderDotKey()}

                        {this.renderDotKey()}

                        <TouchableHighlight
                            underlayColor={this.clearBtnUnderlayColor()}
                            style={[keyStyle.wrapper, this.disableClearButtonBackground()]}
                            onPress={this.onPress.bind(this, 'del')}
                            onLongPress={this.clearAll.bind(this)}
                        >
                            <View style={[keyStyle.bd, this.disableBorder()]}>
                                <Image source={require('./images/icon_delete.png')} />
                            </View>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        );
    }
}
