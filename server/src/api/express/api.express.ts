import { Api } from "../api";
import express, { Express, Request, Response } from 'express';

export class ApiExpress implements Api {

    // App deve ter seu valor passado somente uma vez, e ser do tipo Express
    private constructor(readonly app: Express) { }

    // Método estático para construir uma instância de ApiExpress
    public static build() {
        const app = express()
        app.use(express.json())
        return new ApiExpress(app)
    }; 

    // Implementação do método start conforme o contrato da interface Api
    public start(port: number) {
        // tenta inicializar o servidor, se ocorrer um erro, seu tipo é identificado e encaminhado para a camada mais alta de catch
        try {
            this.app.listen(port, () => {
                console.log(`Server running on port http://localhost:${port}`)
            })
        } catch (error) {
            console.error(`Failed to start the server on port ${port}.`)

            if (error instanceof Error) {
                console.error(`Error details: ${error.message}`)
            } else {
                console.error("Unknow error ocurred")
            }

            throw error;

        }
    }
}