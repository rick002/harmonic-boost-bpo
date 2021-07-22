export interface PositionsForm {
    title: string;
    buttonLabel: string;
    isCreate: boolean;
    isUpdate: boolean;
    isRemoveButtonVisible: boolean;
}

export interface Position {
    positionId?: string;
    positionTitle: string;
    positionPublishedDate?: string;
    positionSector: string;
    positionCompany: string;
    positionAddress: string;
    positionCity: string;
    positionCountry: string;
    positionjobType: string;
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