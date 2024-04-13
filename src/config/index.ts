import fs from 'fs';

export default {
    servicename: 'vir-interviews-API',                  // Service name.
    port: 3000,                                         // Port for the service.                             
    jwtAuthKey: 'goodluckgettingjob',                   // jwtAuthKey is required for jwt token generation it can be random.
    paths: {
        tmp: '/tmp',
        asset: '/asset',
        docs: '/docs',
        dependencies: '/dependencies',
        tag: '/tag',
        fittingmedia: '/fittingmedia',
        dashboard: '/dashboard'
    },
    mongodb: {
        host: 'mongodb+srv://vir-interviews.m0ujdbv.mongodb.net/',
        db_name: 'vir-interviews',
        user: 'vir-interviews',
        pass: 'vir-interviews'
    },
    redis: {
        host: 'localhost',
        port: 6379
    }
}