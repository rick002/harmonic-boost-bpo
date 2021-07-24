export interface PositionsForm {
    title: string;
    buttonLabel: string;
    isCreate: boolean;
    isDetails: boolean;
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



export const DEFAULT_POSITION: Position = {
    positionTitle: '',
    positionSector: '',
    positionCompany: '',
    positionAddress: '',
    positionCity: '',
    positionCountry: '',
    positionjobType: '',
};

export const getDefaultPositionsForm = (): PositionsForm => {
    return {
        title: '',
        buttonLabel: '',
        isCreate: true,
        isDetails: false,
        isRemoveButtonVisible: false,
    };
}
