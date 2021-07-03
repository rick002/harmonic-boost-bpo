export interface PositionsForm {
    title: string;
    buttonLabel: string;
    isCreate: boolean;
    isUpdate: boolean;
    isRemoveButtonVisible: boolean;
}


export const getDefaultPositionsForm = (): PositionsForm => {
    return {
        title: '',
        buttonLabel: '',
        isCreate: true,
        isUpdate: false,
        isRemoveButtonVisible: false,
    };
}