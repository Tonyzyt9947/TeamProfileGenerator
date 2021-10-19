const employee = require('./employee')

class engineer extends employee{
    constructor(name, id, email, officeNumber){
        super(name, id, email)
        this.officeNumber = officeNumber
    }

    getRole(){
        return 'Manager'
    }
}