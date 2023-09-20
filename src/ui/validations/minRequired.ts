
export const useMinRequired = (min: number) => {
    const minRequired = (value: string) => {
        const IS_VALID_MIN_REQUIRED = value.length < min
        return IS_VALID_MIN_REQUIRED
            ? null
            : {valueMatch: 'Min length not valid'};
    }
    return minRequired
}
