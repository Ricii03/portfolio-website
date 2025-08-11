# Portfolio Backend API

Backend API for the portfolio website built with Node.js, Express, and MongoDB.

## 🚀 Features

- **RESTful API**: Clean REST endpoints for projects, skills, and contact
- **MongoDB Integration**: Mongoose ODM for data modeling and validation
- **CORS Support**: Cross-origin resource sharing enabled
- **Error Handling**: Comprehensive error handling and validation
- **Environment Configuration**: Flexible configuration management

## 🛠️ Tech Stack

- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database
- **Mongoose** - MongoDB object modeling
- **CORS** - Cross-origin resource sharing
- **dotenv** - Environment variable management

## 📁 Project Structure

```
backend/
├── models/
│   ├── Project.js      # Project data model
│   ├── Skill.js        # Skill data model
│   └── Contact.js      # Contact message model
├── routes/
│   ├── projects.js     # Project API endpoints
│   ├── skills.js       # Skill API endpoints
│   └── contact.js      # Contact API endpoints
├── config.js           # Configuration settings
├── server.js           # Main server file
├── package.json        # Dependencies and scripts
└── README.md           # This file
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- MongoDB (local or cloud instance)
- npm or yarn package manager

### Installation

1. **Install dependencies**
   ```bash
   npm install
   ```

2. **Set up environment variables**
   Create a `.env` file in the root directory:
   ```env
   PORT=5000
   MONGODB_URI=mongodb://localhost:27017/portfolio
   NODE_ENV=development
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Start production server**
   ```bash
   npm start
   ```

## 📡 API Endpoints

### Projects

- `GET /api/projects` - Get all projects
- `GET /api/projects/featured` - Get featured projects
- `GET /api/projects/:id` - Get project by ID
- `POST /api/projects` - Create new project
- `PUT /api/projects/:id` - Update project
- `DELETE /api/projects/:id` - Delete project

**Query Parameters:**
- `category` - Filter by project category
- `featured` - Filter by featured status (true/false)
- `limit` - Limit number of results (default: 50)

### Skills

- `GET /api/skills` - Get all skills
- `GET /api/skills/category/:category` - Get skills by category
- `GET /api/skills/:id` - Get skill by ID
- `POST /api/skills` - Create new skill
- `PUT /api/skills/:id` - Update skill
- `DELETE /api/skills/:id` - Delete skill
- `PATCH /api/skills/:id/toggle` - Toggle skill active status

**Query Parameters:**
- `category` - Filter by skill category
- `active` - Filter by active status (true/false)

### Contact

- `GET /api/contact` - Get all contact messages (admin)
- `POST /api/contact` - Submit contact form
- `GET /api/contact/:id` - Get message by ID
- `PATCH /api/contact/:id/status` - Update message status
- `PATCH /api/contact/:id/spam` - Mark message as spam
- `DELETE /api/contact/:id` - Delete message

**Query Parameters:**
- `status` - Filter by message status
- `limit` - Limit number of results (default: 50)
- `page` - Page number for pagination (default: 1)

## 🗄️ Data Models

### Project Schema
```javascript
{
  title: String (required),
  description: String (required),
  image: String,
  technologies: [String],
  category: String (enum),
  liveUrl: String,
  githubUrl: String,
  featured: Boolean,
  order: Number,
  status: String (enum),
  startDate: Date,
  endDate: Date,
  timestamps: true
}
```

### Skill Schema
```javascript
{
  name: String (required, unique),
  level: Number (0-100, required),
  category: String (enum, required),
  color: String,
  icon: String,
  order: Number,
  isActive: Boolean,
  timestamps: true
}
```

### Contact Schema
```javascript
{
  name: String (required),
  email: String (required),
  subject: String (required),
  message: String (required),
  status: String (enum),
  ipAddress: String,
  userAgent: String,
  isSpam: Boolean,
  timestamps: true
}
```

## 🔧 Configuration

The application uses a `config.js` file for configuration settings:

```javascript
module.exports = {
  PORT: process.env.PORT || 5000,
  MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/portfolio',
  NODE_ENV: process.env.NODE_ENV || 'development',
  CORS_ORIGIN: process.env.CORS_ORIGIN || 'http://localhost:5173'
};
```

## 🚀 Deployment

### Environment Variables
Set the following environment variables in production:

- `PORT` - Server port (default: 5000)
- `MONGODB_URI` - MongoDB connection string
- `NODE_ENV` - Environment (production/development)
- `CORS_ORIGIN` - Allowed CORS origin

### Production Commands
```bash
npm start
```

## 📊 Database Indexes

The application includes optimized database indexes for better performance:

- **Projects**: `{ category: 1, featured: 1 }`, `{ order: 1 }`
- **Skills**: `{ category: 1, order: 1 }`, `{ isActive: 1 }`
- **Contact**: `{ status: 1, createdAt: -1 }`, `{ email: 1 }`, `{ isSpam: 1 }`

## 🔒 Security Features

- **Input Validation**: Comprehensive input validation and sanitization
- **CORS Configuration**: Configurable cross-origin resource sharing
- **Error Handling**: Secure error messages without exposing internals
- **Rate Limiting**: Ready for rate limiting implementation

## 🧪 Testing

To run tests (when implemented):
```bash
npm test
```

## 📝 API Documentation

For detailed API documentation, you can use tools like:
- Postman
- Insomnia
- Swagger/OpenAPI

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is open source and available under the [ISC License](LICENSE).

## 📞 Support

If you have any questions or need help:
- Create an issue in the repository
- Contact through the portfolio website
- Email: your.email@example.com

---

**Happy Coding! 🚀**

Built with ❤️ using Node.js, Express, and MongoDB
