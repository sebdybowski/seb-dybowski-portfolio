export const throwError = error => {
    if (error) {
        throw new Error(error);
    } else {
        throw new Error('[NO MESSAGE] Unexpected error, please debug.')
    }
}