function randomNumber(num) {
    return Math.floor(Math.random() * num)
};

const data = {
        tips: ['Help others', 'Try to be a better version of youself', '1', '2'],
        motivation: ['Dont let someone say what you have to do', 'You have to have it already, before you get it', '3', '4'],
        questions: ['What makes you happy?', 'What is your strongest feature?', '5', '6'],
    };

function getRandomMessage () {
    for (let iets in data) {
        let optie = randomNumber(data[iets].length);
        console.log(optie);
        switch (iets) {
            case 'tips': console.log(`You should "${data[iets][optie]}".`);
                break
            case 'motivation': console.log(`Listen "${data[iets][optie]}".`);
                break
            case 'questions': console.log(`Question. "${data[iets][optie]}".`);
                break
            default: console.log('No data')

        }
    }
}

$(document).ready(function() {
    $('#button').click(function() {
        getRandomMessage()
    })
});
