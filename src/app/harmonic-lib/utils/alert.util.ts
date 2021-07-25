export class AlertService {
    isVisible: boolean = false;
    successAlert: boolean = false;
    loadingAlert: boolean = false;
    failAlert: boolean = false;

    message: string = 'loading..';

    resetValues(values: any): void {
        this.isVisible = false;
        this.loadingAlert = false;
        this.successAlert = false;
        this.failAlert = false;
    }

    hide(): void {
        this.resetValues({});
    }

    displayErrorAlert(message: string): void {
        this.loadingAlert = false;
        this.successAlert = false;
        this.failAlert = true;
        this.isVisible = true;
        this.message = message;
    }

    displayLoadingAlert(message: string): void {
        this.isVisible = true;
        this.loadingAlert = true;
        this.failAlert = false;
        this.successAlert = false;
        this.message = message;
    }

    displaySuccessAlert(message: string): void {
        this.loadingAlert = false;
        this.failAlert = false;
        this.successAlert = true;
        this.isVisible = true;
        this.message = message;
    }
}