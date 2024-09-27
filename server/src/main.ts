import { ApiExpress } from "./api/express/api.express";

function main() {
    const app = ApiExpress.build()
    app.start(3333)
}

main()