"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowRoutes = void 0;
const express_1 = __importDefault(require("express"));
const borrow_controller_1 = require("../controllers/borrow.controller");
exports.borrowRoutes = express_1.default.Router();
exports.borrowRoutes.post('/', borrow_controller_1.borrowBook);
exports.borrowRoutes.get('/', borrow_controller_1.getBorrowedSummary);
