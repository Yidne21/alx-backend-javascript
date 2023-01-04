interface Teacher{
    readonly firstName: string,
    readonly lastName: string,
    fullTimeEmployee: boolean,
    yearsOfExperience?: number,
    location: string,
    [index: string]: any;
}

export interface printTeacheFunction{
    (firstName: string, lastName: string): string;
}
export default function printTeacher(firstName: string, lastName: string): string {
    return `${firstName[0]}. ${lastName}`
}