import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import KeyboardCustom from "../../keyboard/keyboard";
import { CalculationsScreenPropsInterface, CalculationsScreenStateInterface } from './interfaces';

class Model {
    private keys: string[] = []

    private listeners: any = []

    public addKey(key: string) {
        this.keys.push(key);
        this.notify();
    }

    public delKey() {
        this.keys.pop();
        this.notify();
    }

    public clearAll() {
        this.keys = [];
        this.notify();
    }

    public getKeys() {
        return this.keys;
    }

    public onChange(listener: (m: Model) => void) {
        this.listeners.push(listener);
    }

    public notify() {
        this.listeners.forEach((listner: (m: Model) => void) => {
            listner(this);
        });
    }
};

const styles = StyleSheet.create({
    text: { marginTop: 100, textAlign: 'center' }
});


export default class CalculationsScreen extends React.Component<CalculationsScreenPropsInterface, CalculationsScreenStateInterface> {
    public state: CalculationsScreenStateInterface = {
        text: ''
    }

    private model = new Model()

    constructor(props: CalculationsScreenPropsInterface) {
        super(props);
    }

    componentDidMount() {
        this.model.onChange((model: any) => {
            this.setState({ text: model.getKeys().join('') });
        });
    }

    private handleClear() {
        this.model.clearAll();
    }

    private handleDelete() {
        this.model.delKey();
    }

    private handleKeyPress(key: string) {
        this.model.addKey(key);
    }

    render() {
        return <View style={{ flex: 1 }}>
            <Text style={styles.text}>{this.state.text}</Text>

            <KeyboardCustom
                isRenderDot={true}
                onClear={this.handleClear.bind(this)}
                onDelete={this.handleDelete.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
            />
        </View>
    }
}
