const inquirer = require('inquirer')
const fs = require('fs')

const startQuestions = [
    {
        type: 'input',
        name: 'managerName',
        message: 'Enter the manager\'s name:',
    },
    {
        type: 'input',
        name: 'managerId',
        message: 'Enter the manager\'s empoyee ID:',
    },
    {
        type: 'input',
        name: 'managerEmail',
        message: 'Enter the manager\'s email:',
    },
    {
        type: 'input',
        name: 'managerOffice',
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
        name: 'engineerName',
        message: 'Enter the engineer\'s name:',
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'Enter the engineer\'s empoyee ID:',
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'Enter the engineer\'s email:',
    },
    {
        type: 'input',
        name: 'engineerGit',
        message: 'Enter the engineer\'s github username:',
    },

]

const internQuestions = [
    {
        type: 'input',
        name: 'internName',
        message: 'Enter the intern\'s name:',
    },
    {
        type: 'input',
        name: 'internId',
        message: 'Enter the intern\'s empoyee ID:',
    },
    {
        type: 'input',
        name: 'internEmail',
        message: 'Enter the intern\'s email:',
    },
    {
        type: 'input',
        name: 'internSchool',
        message: 'Enter the intern\'s school:',
    },

]