// Store required classes and modules
const inquirer = require('inquirer')
const fs = require('fs')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

// Starting questions (manager information)
const managerQuestions = [
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
// Menu prompt
const menu = [
    {
        type: 'list',
        name: 'menu',
        message: 'Select to add an employee, or finish:',
        choices:['Engineer','Intern', 'Finish']
    }
]
// Engineer Questions
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
// Intern Questions
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
// Placeholder array to collect logs of employees
let employeeArr = []

// Starting function, prompts manager questions, then prompts menu
function init(){
    inquirer.prompt(managerQuestions)
    .then((answers)=>{
        let newManager = new Manager(answers.name, answers.id, answers.email, answers.officeNumber)
        employeeArr.push(newManager)
        console.log(employeeArr)
    })
    .then(()=>{promptMenu()})
    
}

// prompts menu function, each employee role option invoke corresponding questions, or invoke finish function
function promptMenu(){
    inquirer.prompt(menu)
    .then((answers)=>{
        switch(answers.menu){
            case 'Engineer':
                console.log(answers.menu);
                promptEngineer();
                break;
            case 'Intern':
                console.log('aaa');
                promptIntern();
                break;
            case 'Finish':
                finish();
                break;
        }
    }

    )
}
// prompts engineering questions, returns to menu afterwards
function promptEngineer(){
    inquirer.prompt(engineerQuestions)
    .then((answers)=>{
        let newEngineer = new Engineer(answers.name, answers.id, answers.email, answers.github)
        employeeArr.push(newEngineer)
        console.log(employeeArr)
    })
    .then(()=>{promptMenu()})

}
// prompts intern questions, returns to menu afterwards
function promptIntern(){
    inquirer.prompt(internQuestions)
    .then((answers)=>{
        let newIntern = new Intern(answers.name, answers.id, answers.email, answers.school)
        employeeArr.push(newIntern)
        console.log(employeeArr)
    })
    .then(()=>{promptMenu()})

}
// gathers all employee information and generate cards for html
function generateCards(){
    console.log(employeeArr)
    let cards = ``
    employeeArr.forEach(employee => {
        switch(employee.getRole()){
            case 'Manager':
                cards=cards+
`                
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4><i class="fas fa-mug-hot"></i> Manager</h4>
            </div>
            <div class="card-body">
                ID: ${employee.id}
            </div>
            <div class="card-body">
                Email:<a href="mailto:${employee.email}"> ${employee.email}</a>
            </div>
            <div class="card-body">
                Office: ${employee.officeNumber}
            </div>
        </div>

`;
                break;
            case 'Engineer':
                cards=cards+
`                
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4><i class="fas fa-cogs"></i> Engineer</h4>
            </div>
            <div class="card-body">
                ID: ${employee.id}
            </div>
            <div class="card-body">
                Email:<a href="mailto:${employee.email}"> ${employee.email}</a>
            </div>
            <div class="card-body">
                Github:<a target="blank_" href="https://github.com/${employee.github}"> ${employee.github}</a>
            </div>
        </div>

`;
            break;     

            case 'Intern':
                cards=cards+
`                
        <div class="card">
            <div class="card-header">
                <h3>${employee.name}</h3>
                <h4><i class="fas fa-user-graduate"></i> Intern</h4>
            </div>
            <div class="card-body">
                ID: ${employee.id}
            </div>
            <div class="card-body">
                Email: <a href="mailto:${employee.email}"> ${employee.email}</a>
            </div>
            <div class="card-body">
                School: ${employee.school}
            </div>
        </div>

`;
            break;     
        }
    })
    return cards
}

// calls generate cards then generate the html file
function finish(){

    var htmlcards = generateCards()

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
    <script src="https://kit.fontawesome.com/yourcode.js" crossorigin="anonymous"></script>
    <title>Team Profile</title>
</head>
<body>
    <header class="container-fluid">
        <h1>Team Profile</h1>
    </header>

    <main class="container">
${htmlcards}
    </main>


</body>
</html>
`


    fs.writeFile('./dist/index.html', content, (err) =>
    err ? console.error(err) : console.log('File Created')
    )

}

// initialize application
init()