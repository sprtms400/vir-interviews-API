import express from 'express';
import http from 'http';
import mongoose from 'mongoose';
import cors from 'cors';

import config from './config';
import utils from './utils';
import middlewares from './middlewares';
import routes from './routes';

/**
 * 에러처리 고안 필요
 * morgan, winston, log4js 등등
 * @returns 
 */
async function start_server() {
    try {
        await mongoose.connect(config.mongodb.host, {
            dbName: config.mongodb.db_name,
            user: config.mongodb.user,
            pass: config.mongodb.pass,
        })
        .catch((error) => {
            console.error('error:', error);
            throw new Error('mongoDB connection failed');
        });

        const app = express();
        /**
         * Apply body parser  at middleware
         * 
         * After express 4.16+ version, body-parser is no longer needed.
         */
        app.use(express.json({ limit: '5mb' }));
        app.use(express.urlencoded({ extended: true, limit: '50mb' }));
        app.use(express.text({ type: 'text/html'}));

        const corsOptions = {
            origin: ['http://localhost:3000'],
            optionsSuccessStatus: 200
        }
        app.use(cors(corsOptions));
        // app.all('/v1/auth/*', middlewares.validateRequest);
        app.use(routes);

        const server = http.createServer(app);
        // Listen http server.
        server.listen(config.port, () => {
            utils.logger.info(
                `${config.servicename} API server is running on port ` + config.port
            );
        })
        .on('error', err => utils.logger.error(err)); 

    } catch (error) {
        console.error('error:', error);
        return
    }
}

start_server();