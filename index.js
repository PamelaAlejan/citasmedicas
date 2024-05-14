import chalk from 'chalk';
import { v4 as uuidv4 } from 'uuid';
import { nanoid } from 'nanoid';
import moment from 'moment'
import _ from "lodash"
import axios from 'axios'




/*
console.log(chalk.blue('hello world!'));
console.log(chalk.bgCyan('hello world'));

const users = [
    {
        id: nanoid(),
        name: 'user1'
    },
    {
        id: nanoid(),
        name: 'user2'
    }
]
//console.log(users)

moment.locale('es'),
    console.log(moment().format('LL'))
    */
/*
const numeros = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const maximo = _.max(numeros)
console.log(maximo)

const minimo = _.min(numeros)
console.log(minimo)

console.log(_.partition(numeros, (n) => n % 2))*/


//const response = await fetch('https://jsonplaceholder.typicode.com/todos/1')
//const data = await response.json()
//console.log(data)

const obtenerInformacion = async () => {

    const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
    console.log(response.data)
}
obtenerInformacion()

/*
        .then(response => response.json())
        .then(json => console.log(json))
*/