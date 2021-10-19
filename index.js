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

function generateCards(){
    let cards = ``
    employeeArr.forEach(employee => {
        switch(employee.getRole()){
            case 'Manager':
                cards=cards+
`                
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                ID:${employee.id}
            </div>
            <div class="card-body">
                Email:<a href="mailto:${employee.email}">${employee.email}</a>
            </div>
            <div class="card-body">
                Office:${employee.officeNumber}
            </div>
        </div>

`;
            case 'Engineer':
                cards=cards+
`                
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                ID:${employee.id}
            </div>
            <div class="card-body">
                Email:<a href="mailto:${employee.email}">${employee.email}</a>
            </div>
            <div class="card-body">
                Github:<a target="blank_" href="https://github.com/${employee.github}">${employee.github}</a>
            </div>
        </div>

`;     

            case 'Intern':
                cards=cards+
`                
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                ID:${employee.id}
            </div>
            <div class="card-body">
                Email:<a href="mailto:${employee.email}">${employee.email}</a>
            </div>
            <div class="card-body">
                School:${employee.school}
            </div>
        </div>

`;     
        }
    })
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
                
        <div class="card">
            <div class="card-header">
                <h3>Name</h3>
                <h4>Manager</h4>
            </div>
            <div class="card-body">
                ID:
            </div>
            <div class="card-body">
                Email:
            </div>
            <div class="card-body">
                Office:
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>Name</h3>
                <h4>Engineer</h4>
            </div>
            <div class="card-body">
                ID: 1
            </div>
            <div class="card-body">
                Email: <a href="mailto: yitianzhang@ucsb.edu">yitianzhang@ucsb.edu</a>
            </div>
            <div class="card-body">
                Github: <a target="blank_" href="https://github.com/Tonyzyt9947">Tonyzyt9947</a>
            </div>
        </div>

        <div class="card">
            <div class="card-header">
                <h3>Name</h3>
                <h4>Intern</h4>
            </div>
            <div class="card-body">
                ID:
            </div>
            <div class="card-body">
                Email:
            </div>
            <div class="card-body">
                School:
            </div>
        </div>


    </main>


</body>
</html>
`

function finish(){

    generateCards()

    fs.writeFile('index.html', content, (err) =>
    err ? console.error(err) : console.log('File Created')
    )
}

init()