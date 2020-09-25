export interface KeyboardProposInterface {
    isRenderDot: boolean
    disableOtherText?: boolean
    disableBorder?: boolean
    disableClearButtonBackground?: boolean
    disableDot?: boolean

    keyboardType?: string

    onClear: () => void
    onDelete: () => void
    onKeyPress: (key: string) => void
}
