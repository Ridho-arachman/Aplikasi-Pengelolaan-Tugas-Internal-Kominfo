import express from 'express';

const app = express();

// Parse JSON
app.use(express.json());

// Middleware tambahan yang biasanya digunakan:
app.use(cors()); // Untuk mengizinkan CORS (Cross-Origin)
app.use(morgan('dev')); // Untuk log request ke terminal
app.use(express.urlencoded({ extended: true })); // Untuk parsing form (x-www-form-urlencoded)

// Routes
app.use('/api/users', userRoutes);

// Error handling middleware (harus diletakkan setelah route)
app.use(errorHandler);

export default app;
