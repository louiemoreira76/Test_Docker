//configuração do postgres, usuario, host, senha e porta dps passando para dokerfile dps arquivos de conf do kubernets
module.exports = {
    pgUser: process.env.PGUSER,
    pgHost: process.env.PGHOST,
    pgDatabase: process.env.PGDATABASE,
    pgPassword: process.env.PGPASSWORD,
    pgPort: process.env.PGPORT
} //variaveis de ambiente para definir objeto