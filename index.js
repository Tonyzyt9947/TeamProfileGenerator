const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const startQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the manager\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the manager\'s empoyee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the manager\'s email:',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'Enter the manager\'s office number:',
    }
]

const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Select to add an employee, or finish:',
        choices:['Engineer','Intern', 'Finish']
    }
]

const engineerQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the engineer\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the engineer\'s empoyee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the engineer\'s email:',
    },
    {
        type: 'input',
        name: 'github',
        message: 'Enter the engineer\'s github username:',
    },

]

const internQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'Enter the intern\'s name:',
    },
    {
        type: 'input',
        name: 'id',
        message: 'Enter the intern\'s empoyee ID:',
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter the intern\'s email:',
    },
    {
        type: 'input',
        name: 'school',
        message: 'Enter the intern\'s school:',
    },

]

let employeeArr = []

function init(){
    inquirer.prompt(startQuestions)
    .then((answers)=>{
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArr.push(newManager)
    })

    promptMenu()
}

function promptMenu(){
    inquirer.prompt(menu)
    .then((answers)=>{
        switch(answers.menu){
            case 'Engineer':
                promptEngineer();
            case 'Intern':
                promptIntern();
            case 'Finish':
                finish();
        }
    }

    )
}

function promptEngineer(){
    inquirer.prompt(engineerQuestions)
    .then((answers)=>{
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(newEngineer)
    })

    promptMenu()
}

function promptIntern(){
    inquirer.prompt(internQuestions)
    .then((answers)=>{
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArr.push(newIntern)
    })

    promptMenu()
}

let content = 
`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet">
    <link rel="stylesheet" href="./style.css">
    <title>Team Profile</title>
</head>
<body>
    <header class="container-fluid">
        <h1>Team Profile</h1>
    </header>

    <main class="container">
        
    </main>


</body>
</html>
`

function finish(){
    fs.writeFile('index.html', content, (err) =>
    err ? console.error(err) : console.log('File Created')
    )
}

init()