export const numberFormat = (value) =>
    new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'USD'
    }).format(value)
    

export const dateFormat = (value) =>
    new Date(value).toLocaleDateString('en-us', {month:"short", day:"numeric"}
    )