"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const index_1 = __importDefault(require("./index"));
const port = process.env.PORT || 5000;
index_1.default.get("/", (req, res) => {
    res.send("Server is running");
});
index_1.default.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
