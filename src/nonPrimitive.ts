//array, object

//ts - tuple

let bazarList: string[] = ['eggs', 'milks', 'sugar', 'banana', 'orange'];

let mixedArr: (string | number)[] = ['eggs', 12, 'milks', 40];

mixedArr.push(true);

let coordinates: [number, number] = [20, 30, 40]

const user: {
    organization: "programming Hero"; //value => type: literal types
    //firstName: string;
    //middleName?: string// optional type
    //lastName: string;
    // isMarried: boolean;
    // } = {
    //organization: "programming Hero"
    //   firstName: "Jhankar",
    //   lastName: "Mahbub",
    //   isMarried: true,
    // };

    // user.organization = "Programming Hero Fire";

    const user: {
        readonly organization: string; // access modifier
        firstName: string;
        middleName?: string; // optional type
        lastName: string;
        isMarried: boolean;
    } = {
    organization: "Programming Hero",
    firstName: "Jhankar",
    lastName: "Mahbub",
    isMarried: true,
    };

user.organization = "Programming Hero Fire";

console.log(user);

console.log(user);