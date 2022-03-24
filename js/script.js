let app = new Vue(
    {
        el: `#app`,
        data: {
            mailList: [],
        },
        methods : {
            printMailList(){
                const self = this;
                    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                        .then(function (answer){
                            const newMail = answer.data.response
                            self.mailList.push(newMail)
                            return newMail
                        })
                        console.warn(self.mailList)
            }
        },
        // Updated per verifica dati e test funzioni
        updated(){
        }
    }
)

