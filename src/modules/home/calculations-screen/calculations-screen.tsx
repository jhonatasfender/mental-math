import React from 'react';
import { Text, View } from 'react-native';
import KeyboardCustom from "../../keyboard/keyboard";
import { CalculationsScreenPropsInterface, CalculationsScreenStateInterface } from './interfaces';
import { ModelAction } from './model-action';
import { styles } from './style';

export default class CalculationsScreen extends React.Component<CalculationsScreenPropsInterface, CalculationsScreenStateInterface> {
    public state: CalculationsScreenStateInterface = {
        text: ''
    }

    private model = new ModelAction()

    constructor(props: CalculationsScreenPropsInterface) {
        super(props);
    }

    public componentDidMount() {
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

    public render() {
        return <View style={{ flex: 1 }}>
            <Text style={styles.text}>{this.state.text}</Text>

            <KeyboardCustom
                isRenderDot={true}
                disableOtherText={true}
                onClear={this.handleClear.bind(this)}
                onDelete={this.handleDelete.bind(this)}
                onKeyPress={this.handleKeyPress.bind(this)}
            />
        </View>
    }
}
