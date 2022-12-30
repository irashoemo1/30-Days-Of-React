const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
]

export const showDate = (time) => {
    const month = months[time.getMonth()].slice(0, 3)
    const year = time.getFullYear()
    const date = time.getDate()
    return `${month} ${date}, ${year}`
}

export const showMonth = (time) => {
    const month = months[time.getMonth()]
    return `${month}`
}
export const showHours = (time) => {
    const hours = time.getHours()
    return `${hours}`
}