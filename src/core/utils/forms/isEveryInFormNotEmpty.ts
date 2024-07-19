export const isEveryInFormNotEmpty = (formData: {[key: string]: string}) => {
    const result = Object.values(formData).every(input => {
        const trimmedInput = input.trim()
        return trimmedInput != "" && trimmedInput?.length > 0
    })
    console.log(result)
    return result
}