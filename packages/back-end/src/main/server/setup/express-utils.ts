import { NextFunction, Request, Response, Router } from 'express';
import { validationResult } from 'express-validator';

export type Wrapper = (router: Router) => void;

export type Handler = (req: Request, res: Response, next: NextFunction) => Promise<void> | void;

export interface IRoute {
	path: string;
	method: string;
	validations?: Function[];
	handler: Handler[];
}

const wrapHandlers = (handlers: Handler[]) =>
	handlers.map(fn => (req: Request, res: Response, next: NextFunction) => {
		Promise.resolve(fn(req, res, next)).catch(next);
	});

export const applyRoutes = (routes: IRoute[], router: Router) => {
	for (const route of routes) {
		const { method, path, validations, handler } = route;
		if (validations) {
			(router as any)[method](path, validations, wrapHandlers(handler));
		}
		(router as any)[method](path, wrapHandlers(handler));
	}
};

export const validateRequest = (req: Request, res: Response) => {
	const errors = validationResult(req);

	if (!errors.isEmpty()) {
		res.status(400).send({ errors: errors.mapped() });
		return false;
	}
	return true;
};
