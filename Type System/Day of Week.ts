type DaysOfTheWeek = {
    [key: string]: number;
};

const daysOfTheWeekObj: DaysOfTheWeek = {
    "Monday": 1,
    "Tuesday": 2,
    "Wednesday": 3,
    "Thursday": 4,
    "Friday": 5,
    "Saturday": 6,
    "Sunday": 7
};

// function dayOfWeek(day: string): number {
//     return daysOfTheWeekObj[day];
// };


// function dayOfWeek(day: string): number {
//     interface WeekDays {
//         [key: string]: number
//     };

//     const daysOfTheWeekObj: WeekDays = {
//         "Monday": 1,
//         "Tuesday": 2,
//         "Wednesday": 3,
//         "Thursday": 4,
//         "Friday": 5,
//         "Saturday": 6,
//         "Sunday": 7
//     };

//     return daysOfTheWeekObj[day];
// }