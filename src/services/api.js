import axios from 'axios'



//  base URL > https://sujeitoprogramador.com
//  r-api/?api=filmes/   <- ESSA ROTA PUXA TODOS OS FILMES


// r-api/?api=filmes/  <-  filme com id 123


const api = axios.create ({
    baseURL:'https://sujeitoprogramador.com'
})

export default api