const fs = require("node:fs")

fs.readFile("data.json", (err, data) =>{
    if(err===null){
        const data1 = JSON.parse(data)

        let maxrate = 0;

        for(const a of data1){
            if(a.rate > maxrate){
                maxrate=a.rate;
            }
        }

        fs.writeFile("output.txt", `Максимальний курс:${maxrate}`, (err) => {
            if(err===null){
                console.log("The file has been saved!")
            } else {
                console.log(err)
            }
        }
        )

    } else {
        console.log(err)
    }
})