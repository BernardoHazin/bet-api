import { Router as ExpressRouter } from "express";
import { Router, RouteOption } from "@/main/router";

export default class ExpressRouterAdapter implements Router {
  constructor(public expressRouter: ExpressRouter) {}

  build(routes: Record<string, RouteOption>) {}
}
