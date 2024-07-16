export const isEveryInFormNotEmpty = (formData: {[key: string]: string}) => {
    const result = Object.values(formData).every(input => (input && input?.length > 0) || true)
    console.log(result)
    return result
}