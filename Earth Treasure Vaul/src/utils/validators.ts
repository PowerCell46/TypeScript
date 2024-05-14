import { STARTING_URLS, stoneRequirements, userRequirements } from "./constants";


export function validateUserData(email: string, password: string): string | boolean {
    if (email.length < userRequirements.minEmailLen) {
        return `Email must be at least ${userRequirements.minEmailLen} characters!`;
    }

    if (password.length < userRequirements.minPassLen) {
        return `Password must be at least ${userRequirements.minPassLen} characters!`;
    }

    return true;
}


export function validateStoneData(name: string, category: string, 
        color: string, formula: string, location: string, description: string, 
        image: string
): string | boolean {
    if (color.length < stoneRequirements.minColorLen) {
        return `Color must be at least ${stoneRequirements.minColorLen} characters!`;
    }

    if (name.length < stoneRequirements.minNameLen) {
        return `Name must be at least ${stoneRequirements.minNameLen} characters!`;
    }

    if (category.length < stoneRequirements.minCategoryLen) {
        return `Category must be at least ${stoneRequirements.minCategoryLen} characters!`;
    }

    if (formula.length < stoneRequirements.minFormulaLen) {
        return `Formula must be at least ${stoneRequirements.minFormulaLen} characters!`;
    
    } else if (formula.length > stoneRequirements.maxFormulaLen) {
        return `Formula must be maximum of  ${stoneRequirements.maxFormulaLen} characters!`;
    }

    if (location.length < stoneRequirements.minLocationLen) {
        return `Location must be at least ${stoneRequirements.minLocationLen} characters!`;
    
    } else if (location.length > stoneRequirements.maxLocationLen) {
        return `Location must be at least ${stoneRequirements.maxLocationLen} characters!`;
    }

    if (description.length < stoneRequirements.minDescLen) {
        return `Description must be at least ${stoneRequirements.minDescLen} characters!`;
    }

    if (!image.startsWith(STARTING_URLS[0]) && !image.startsWith(STARTING_URLS[1])) {
        return `Image Url must start either with ${STARTING_URLS[0]} either with ${STARTING_URLS[1]}`;
    }

    return true;
}