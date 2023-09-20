
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const useValueMatch = (fieldCompare: string) => {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const valueMatch = (value: string, form: any) => {
        const IS_VALID_MATCH = value === form[fieldCompare]?.value
        return IS_VALID_MATCH
            ? null
            : {valueMatch: 'Value not match'};
    }
    return valueMatch
}
