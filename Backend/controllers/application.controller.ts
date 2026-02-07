import type { Request, Response, NextFunction } from "express";
import {
  allApplication,
  createApplication,
  deleteForm,
  getexistingApplication,
} from "../services/Application.service";

export const applyApplicationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const body = req.body;
    const userId = req.userId;
    const role = req.role;

    if (role === "ADMIN") {
      return res.status(403).json({
        success: false,
        message: "Admins can't fill the form",
      });
    }

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    const existingApplication = await getexistingApplication(userId);

    if (existingApplication) {
      return res.status(400).json({
        success: false,
        message: "You have already submitted an application",
      });
    }

    const form = await createApplication(userId, body);

    res.status(201).json({
      sucess: true,
      form,
    });
  } catch (err) {
    next(err);
  }
};
export const getFilledApplication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userId;
    const role = req.role;

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    if (role === "ADMIN") {
      return res.status(403).json({
        success: false,
        message: "Admins can't fill the form",
      });
    }

    const application = await getexistingApplication(userId);

    if (!application) {
      return res.status(404).json({
        success: false,
        messgae: "No Application found",
      });
    }

    res.status(200).json({
      success: true,
      application,
    });
  } catch (err) {
    next(err);
  }
};
export const getAllApplication = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userId;
    const role = req.role;

    if (role == "USER") {
      return res.status(400).json({
        success: false,
        message: "Only admins can access all the forms",
      });
    }

    const forms = await allApplication();

    res.status(200).json({
      success: true,
      forms,
    });
  } catch (err) {
    next(err);
  }
};

export const getStatus = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userId;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }
    const form = await getexistingApplication(userId);

    if (!form) {
      return res.status(404).json({
        success: false,
        messgae: "No Application found",
      });
    }

    res.status(200).json({
      success: true,
      status: form.status,
    });
  } catch (err) {
    next(err);
  }
};

export const updateApplicationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const role = req.role;
    const { newStatus, userId } = req.body;
    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    if (role === "USER") {
      return res.status(400).json({
        success: false,
        message: "Only admins can update the status",
      });
    }

    const form = await getexistingApplication(userId);

    if (!form) {
      return res.status(404).json({
        success: false,
        messgae: "No Application found",
      });
    }

    form.status = newStatus;
    form.save();

    res.status(200).json({
      success: true,
      message: "Status updated",
      form,
    });
  } catch (err) {
    next(err);
  }
};
export const withdrawApplicationHandler = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  try {
    const userId = req.userId;
    const role = req.role;

    if (role === "ADMIN") {
      return res.status(403).json({
        success: false,
        message: "Admins can't delete the form",
      });
    }

    if (!userId) {
      return res.status(400).json({
        success: false,
        message: "User ID is required",
      });
    }

    await deleteForm(userId);

    res.status(201).json({
      sucess: true,
      message:"You application has been deleted",
    });
  } catch (err) {
    next(err);
  }
};
