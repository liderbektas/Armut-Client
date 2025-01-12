export const formatDate = (dateString) => {
    const date = new Date(dateString)
    const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
    }

    const formatedDate = new Intl.DateTimeFormat('tr-TR', options).format(date)
    return formatedDate
}