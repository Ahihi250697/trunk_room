let mv = require('../includes/mv.11ty')

module.exports = function(){
    return `
        <main class='box-view'>
            <div class='whole-wrap'>
                ${mv()}
            </div>
        </main>
    `
}