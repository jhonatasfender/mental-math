import { ViewStyle } from "react-native";
import { ConfigOperationInterface } from "../interfaces/InterfacesHome";

export const operations: ConfigOperationInterface[] = [
    {
        key: 1,
        math: "+"
    },
    {
        key: 2,
        math: "-"
    },
    {
        key: 3,
        math: "\\times"
    },
    {
        key: 4,
        math: "\\div"
    },
    {
        key: 5,
        math: "\\frac{x}{y}"
    },
    {
        key: 6,
        math: "\\sqrt{x}"
    },
    {
        key: 7,
        math: "\\int\\limits_{x\\in C}xdx"
    },
    {
        key: 8,
        math: "\\lim_{h\\to 0}\\frac{f(x+h)-f(x)}{h}",
        config: {
            ex: 12
        },
        style: {
            fontSize: 10,
            width: "100%"
        } as ViewStyle
    },
    {
        key: 9,
        math: "\\prod_{i=1}^ni=n!"
    }
]
