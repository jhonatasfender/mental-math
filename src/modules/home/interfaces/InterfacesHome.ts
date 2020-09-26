import { ViewStyle } from "react-native";
import { MathToSVGConfig } from "react-native-math-view/src/mathjax";

export interface HomePropsInterface {

}

export interface HomeStateInterface {
    view: JSX.Element | JSX.Element[]
}

export interface ConfigOperationInterface {
    key: number
    math: string
    config?: Partial<MathToSVGConfig>
    style?: ViewStyle
}
