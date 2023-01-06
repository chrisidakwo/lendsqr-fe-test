export const toHumanReadableDate = (date: string): string => {
    const parsedDate = new Date(Date.parse(date));

    const datePart = parsedDate.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
    });

    const time = parsedDate.toLocaleString('en-US').split(', ')[1].split(' ');
    const [hour, min, ] = time[0].split(':');

    const timePart = `${hour}:${min} ${time[1]}`;

    return `${datePart} ${timePart}`;
};
