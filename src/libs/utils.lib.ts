
// A utility function that takes multiple class names as arguments and returns a string with space-separated classes that are truthy.
export function classNames(...classes: any[]): string {
    return classes.filter(Boolean).join(' ');
}

// A function that takes a string and returns the same string with the first letter capitalized.
export const capitalize = (s: string): string => {
    if (typeof s !== "string") return "";
    return s.charAt(0).toUpperCase() + s.slice(1);
};

// A function that truncates a given string to a specified length and appends "..." if the string is longer than the specified length.
export const truncate = (str: string, num: number): string => {
    if (str.length <= num) {
        return str;
    }
    return str.slice(0, num) + "...";
};

// A function that takes a date-time string and returns a formatted date string in the format "Month day, year" (e.g., "July 31, 2023").
export const formatDate = (dateTimeString: string): string => {
    return new Date(dateTimeString).toLocaleDateString(undefined, {
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });    
};

// A function that takes a date-time string and returns a formatted time string in the format "HH:mm:ss" (e.g., "09:30:15").
export const formatTime = (dateTimeString: string): string => {
    return new  Date(dateTimeString).toLocaleTimeString(undefined, {
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });   
};