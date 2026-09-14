const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const fs = require("fs");
const path = require("path");

dotenv.config();

const app = express();

const PORT = process.env.PORT;
const DATA_FILE_PATH = process.env.DATA_FILE_PATH;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;

if (!PORT || !DATA_FILE_PATH || !ALLOWED_ORIGIN) {
    console.error("Required environment variables are missing.");
    process.exit(1);
}

const dataDirectory = path.resolve(__dirname, DATA_FILE_PATH);

const projectsFile = path.join(
    dataDirectory,
    "projects.json"
);

const contactsFile = path.join(
    dataDirectory,
    "contacts.json"
);

app.use(
    cors({
        origin: ALLOWED_ORIGIN
    })
);

app.use(express.json());

app.get("/", (req, res) => {
    res.status(200).json({
        status: "ok"
    });
});

app.get("/api/projects", (req, res, next) => {
    try {
        const projects = JSON.parse(
            fs.readFileSync(projectsFile, "utf-8")
        );

        res.status(200).json(projects);
    } catch (error) {
        next(error);
    }
});

app.get("/api/projects/:id", (req, res, next) => {
    try {
        const projects = JSON.parse(
            fs.readFileSync(projectsFile, "utf-8")
        );

        const project = projects.find(
            (item) => item.id === req.params.id
        );

        if (!project) {
            return res.status(404).json({
                error: "Project not found"
            });
        }

        res.status(200).json(project);
    } catch (error) {
        next(error);
    }
});

app.post("/api/contact", (req, res, next) => {
    try {
        const { name, email, message } = req.body;

        if (!name || typeof name !== "string" || !name.trim()) {
            return res.status(400).json({
                error: "Name is required"
            });
        }

        if (!email || typeof email !== "string" || !email.trim()) {
            return res.status(400).json({
                error: "Email is required"
            });
        }

        if (!message || typeof message !== "string" || !message.trim()) {
            return res.status(400).json({
                error: "Message is required"
            });
        }

        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailPattern.test(email.trim())) {
            return res.status(400).json({
                error: "Please provide a valid email address"
            });
        }

        const contacts = JSON.parse(
            fs.readFileSync(contactsFile, "utf-8")
        );

        const newContact = {
            id: contacts.length + 1,
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            createdAt: new Date().toISOString()
        };

        contacts.push(newContact);

        fs.writeFileSync(
            contactsFile,
            JSON.stringify(contacts, null, 4),
            "utf-8"
        );

        res.status(201).json({
            message: "Contact submission received successfully",
            submission: newContact
        });
    } catch (error) {
        next(error);
    }
});

app.get("/api/contact", (req, res, next) => {
    try {
        const contacts = JSON.parse(
            fs.readFileSync(contactsFile, "utf-8")
        );

        res.status(200).json(contacts);
    } catch (error) {
        next(error);
    }
});

//Global error handler
app.use((req, res) => {
    res.status(404).json({
        error: "Route not found"
    });
});

app.use((err, req, res, next) => {
    console.error(err);

    if (
        err instanceof SyntaxError &&
        err.status === 400 &&
        "body" in err
    ) {
        return res.status(400).json({
            error: "Invalid JSON in request body"
        });
    }

    res.status(500).json({
        error: "Internal server error"
    });
});

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);
});