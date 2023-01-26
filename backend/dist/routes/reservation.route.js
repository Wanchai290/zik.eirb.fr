"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const reservation_controller_1 = __importDefault(require("../controller/reservation.controller"));
const permission_middleware_1 = require("../middlewares/permission.middleware");
const router = express_1.default.Router();
router.get("/", reservation_controller_1.default.listAllReservations);
router.get("/:id", reservation_controller_1.default.getReservationById);
router.post("/", (0, permission_middleware_1.isConnected)(), (0, permission_middleware_1.isMember)(), reservation_controller_1.default.createOrUpdateReservation);
router.post("/admin", (0, permission_middleware_1.isConnected)(), (0, permission_middleware_1.isAdmin)(), reservation_controller_1.default.createAdminReservation);
router.delete("/:id", (0, permission_middleware_1.isConnected)(), (0, permission_middleware_1.isMember)(), reservation_controller_1.default.deleteReservationById);
exports.default = router;
