const Engineer = require('../lib/engineer')


describe('Engineer', ()=>{
    describe('Initialization', ()=>{
        it('should create an object with name, id, email and github username', ()=>{
            const engineer = new Engineer('Sylvanas Windrunner', 1, 'thedarklady@horde.com', 'warchief')

            expect(engineer.name).toEqual('Sylvanas Windrunner')
            expect(engineer.id).toEqual(1)
            expect(engineer.email).toEqual('thedarklady@horde.com')
            expect(engineer.github).toEqual('warchief')
        })
    })
})