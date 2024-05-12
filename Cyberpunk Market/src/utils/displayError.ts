import { errorContainer } from "./constants";


export default function displayErrorMessage(message: string): void {
    if (errorContainer) {
        errorContainer.style.display = 'inline';        

        errorContainer.querySelector("span")!.textContent = message;

        setTimeout(() => {
            if (errorContainer) errorContainer.style.display = 'none';
        }, 3500);
    }
}