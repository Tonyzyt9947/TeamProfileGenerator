const employee = require('./employee')

class engineer extends employee{
    constructor(name, id, email, school){
        super(name, id, email)
        this.school = school
    }

    getRole(){
        return 'Intern'
    }
    getSchool(){
        
    }
}