let app = new Vue(
    {
        el: `#app`,
        data: {
            mailList: [],
            newMail : "",
        },
        methods : {
            printMailList(){
                const self = this;
                    for (let i = 0 ; i< 10 ; i++){

                        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
                            .then(function (answer){
                                const newMail = answer.data.response
                                self.mailList.push(newMail)
                                return self.newMail=newMail;
                            })
                    }
            }
        },
        // Updated per verifica dati e test funzioni
        updated(){
        }
    }
)

