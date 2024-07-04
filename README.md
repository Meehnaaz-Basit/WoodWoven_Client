# WoodWoven

WoodWoven is a Jute & Wooden Crafts store. Users can securely log in, manage craft items, and view detailed pages. The platform supports adding, editing, and deleting items with real-time updates and a responsive design. It also features a dark/light mode toggle and an interactive user interface.

## Live Site URL

[WoodWoven Live Site](https://woodwoven-a10.web.app)

## Best Features

1. **Dynamic Craft Item Management**

   - Comprehensive CRUD operations for adding, updating, and deleting craft items.
   - Category-based views and detailed pages for each item.
   - Real-time updates with responsive design across devices.

2. **User Authentication & Role Management**

   - Secure email/password and Google login.
   - Role-based access for managing craft items and user data.

3. **Enhanced User Experience**
   - Customizable user interface with dark/light mode toggle.
   - Detailed view of each craft item with high-quality images and descriptions.
   - Intuitive navigation and interactive elements for a seamless browsing experience.

## Technologies Used

- **Frontend**: React.js, TailwindCSS, React Rating, Swiper JS, React Hook Form, React-simple-typewriter, React-tooltip
- **Backend**: Node.js, Express.js, MongoDB
- **Authentication**: Firebase, JWT
- **Deployment**: Firebase (Client-side), Vercel (Server-side)
- **Other**: Axios, React Router, SweetAlert, Environment Variables

## Cloning the Project

### Client Side

1. **Clone the repository:**

   ```sh
   git clone https://github.com/Meehnaaz-Basit/WoodWoven_Client.git
   cd WoodWoven_Client

   ```

2. **Install dependencies**

```sh
npm install

```

3. **Create an `.env.local` file in the root directory and add the following codes:**

```sh
VITE_APIKEY=####
VITE_AUTHDOMAIN=####
VITE_PROJECTID=####
VITE_STORAGEBUCKET=####
VITE_MESSAGINGSENDERID=####
VITE_APPID=####
```

- Replace the `#` with your Firebase auth configuration.

### Server Side

1. **Clone the server side of this project: `https://github.com/Meehnaaz-Basit/WoodWoven_Server.git`**

- [You can find it here](https://github.com/Meehnaaz-Basit/WoodWoven_Server)

2. **Copy code**

```sh
git clone https://github.com/Meehnaaz-Basit/WoodWoven_Server.git
cd WoodWoven_Server
nmp install
```

3. \*\*Create an `.env` file in the root directory and add the following codes:

- Copy code

```sh
DB_USER=#
DB_PASS=#
```

- Replace the `#` with your MongoDB server username and password.

4. **Start the server**

```sh
npm start

```
