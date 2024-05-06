export const isEveryInFormNotEmpty = (formData: {[key: string]: string}) => {
    const result = Object.values(formData).every(input => input.length > 0)
    console.log(result)
    return result
}