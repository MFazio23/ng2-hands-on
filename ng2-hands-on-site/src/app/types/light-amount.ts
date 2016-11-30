export enum LightAmount {
    S,
    M,
    L,
    XL
}

export namespace LightAmount {
    export function getLightAmountString(lightAmount: LightAmount) {
        switch (lightAmount) {
            case LightAmount.S:
                return "A Few";
            case LightAmount.M:
                return "Some";
            case LightAmount.L:
                return "A Bunch";
            case LightAmount.XL:
                return "Tons";
            default:
                return "N/A";
        }
    }
}