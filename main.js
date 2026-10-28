
const students = ['Ruslan', 'Asema', 'Samir', 'Adilet'];

function getStudents(students) {
    if (students.length > 3) console.log('Большая группа');
    else console.log('Маленькая группа');

    return students.join(', ');
}

console.log(getStudents(students));



const skills = 'HTML, CSS, JavaScript, React';

function getSkills(skills) {
    let arr = skills.split(', ');

    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }

    return arr;
}

console.log(getSkills(skills).length);


const frontend = ['HTML', 'CSS', 'JavaScript'];
const backend = ['Node.js', 'Python', 'PHP'];

function combineSkills(a, b) {
    let skills = a.concat(b);

    if (skills.length > 5) console.log('Много навыков');

    for (let i = 0; i < skills.length; i++) {
        console.log(skills[i]);
    }

    return skills;
}

combineSkills(frontend, backend);




const scores = [75, 90, 60, 85, 100, 45];

function getTopScores(scores) {
    let copy = scores.slice(0, 3);
    copy[0] = 100;

    console.log(scores);
    console.log(copy);
}

getTopScores(scores);


const data = ['Hello', 100, true, ['HTML', 'CSS'], {name: 'Ruslan'}, null];

function checkData(data) {
    let count = 0;

    for (let i = 0; i < data.length; i++) {
        if (Array.isArray(data[i])) {
            console.log('Это массив');
            count++;
        } else {
            console.log('Это не массив');
        }
    }

    return count;
}

console.log(checkData(data));