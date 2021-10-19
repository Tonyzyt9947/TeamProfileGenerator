const Intern = require('../lib/intern')

describe('Intern', ()=>{
    describe('Initialization', ()=>{
        it('should create an object with name, id, email and school', ()=>{
            const intern = new Intern('Sylvanas Windrunner', 1, 'thedarklady@horde.com', 'IceCrown University')

            expect(intern.name).toEqual('Sylvanas Windrunner')
            expect(intern.id).toEqual(1)
            expect(intern.email).toEqual('thedarklady@horde.com')
            expect(intern.school).toEqual('IceCrown University')
        })
    })
})