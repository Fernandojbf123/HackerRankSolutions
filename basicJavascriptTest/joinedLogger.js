const msg1 = {level:10, text:"foo"}
const msg2 = {level:20, text:"bar"}
const msg3 = {level:30, text:"baz"}

function joinedLogger (level, sep) {

    let messages;

    return function fn (...msgObjs) {
        const levels = msgObjs.map(obj => obj.level)
        const texts = msgObjs.map(obj => obj.text)

        messages = texts.filter((text, idx) => {
            if (levels[idx] >= level) {
                return text
            }
        }, levels)
        
        messages = messages.join(sep)
        return messages
    }
}

joinedLogger(15,";")


